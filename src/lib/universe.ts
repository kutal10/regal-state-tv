import { artifacts, ideas, inquiries } from '../data/site';
import type { Progress } from './progress';

export type UniverseItem = {
	id: string;
	title: string;
	summary: string;
	texture: number;
	duration: string;
	date?: string;
	seed: boolean;
	href?: string;
	searchText: string;
};

export function isPlayableVideo(item: UniverseItem): item is UniverseItem & { href: string } {
	return !item.seed && typeof item.href === 'string' && item.href.length > 0;
}

export type UniverseConstellation = {
	id: string;
	title: string;
	items: UniverseItem[];
	searchText: string;
};

export type UniverseZone = {
	id: string;
	title: string;
	kind: 'topic' | 'collection';
	constellations: UniverseConstellation[];
	items: UniverseItem[];
	searchText: string;
	position: { x: number; y: number };
	size: 'large' | 'medium' | 'small';
	emptyMessage: string;
};

const itemRecords: UniverseItem[] = [
	...artifacts.map((artifact) => {
		const linkedInquiries = artifact.questions
			.map((slug) => inquiries.find((inquiry) => inquiry.slug === slug)?.question)
			.filter((question): question is string => Boolean(question));
		const references = artifact.references.map((reference) => `${reference.label} ${reference.meta}`);
		return {
			id: artifact.slug,
			title: artifact.title,
			summary: artifact.summary,
			texture: artifact.texture,
			duration: artifact.duration,
			date: artifact.date,
			seed: false,
			href: `/watch/${artifact.slug}`,
			searchText: [artifact.title, artifact.summary, ...linkedInquiries, ...references].join(' '),
		};
	}),
	...ideas.map((idea) => {
		const linkedInquiries = idea.questions
			.map((slug) => inquiries.find((inquiry) => inquiry.slug === slug)?.question)
			.filter((question): question is string => Boolean(question));
		return {
			id: idea.slug,
			title: idea.title,
			summary: idea.line,
			texture: idea.texture,
			duration: 'seed',
			seed: true,
			searchText: [idea.title, idea.line, ...linkedInquiries].join(' '),
		};
	}),
];

const itemById = new Map(itemRecords.map((item) => [item.id, item]));

function uniqueItems(ids: string[]): UniverseItem[] {
	return [...new Set(ids)].map((id) => itemById.get(id)).filter((item): item is UniverseItem => Boolean(item));
}

function clustersForInquiries(allowedIds?: Set<string>): UniverseConstellation[] {
	return inquiries.map((inquiry) => {
		const ideaIds = ideas.filter((idea) => idea.questions.includes(inquiry.slug)).map((idea) => idea.slug);
		const items = uniqueItems([...inquiry.artifactSlugs, ...ideaIds]).filter(
			(item) => !allowedIds || allowedIds.has(item.id),
		);
		return {
			id: inquiry.slug,
			title: inquiry.question,
			items,
			searchText: [inquiry.question, inquiry.line, ...items.map((item) => item.searchText)].join(' '),
		};
	});
}

function makeZone(
	id: string,
	title: string,
	kind: UniverseZone['kind'],
	constellations: UniverseConstellation[],
	position: UniverseZone['position'],
	size: UniverseZone['size'],
	emptyMessage = 'Nothing here yet.',
): UniverseZone {
	const items = uniqueItems(constellations.flatMap((constellation) => constellation.items.map((item) => item.id)));
	return {
		id,
		title,
		kind,
		constellations,
		items,
		searchText: [title, ...constellations.map((constellation) => constellation.searchText)].join(' '),
		position,
		size,
		emptyMessage,
	};
}

const filmItems = artifacts
	.filter((artifact) =>
		artifact.references.some((reference) => /^film\b/i.test(reference.meta.trim())),
	)
	.map((artifact) => artifact.slug);

const technologyConstellations = ['AI', 'Hardware', 'Startups', 'Programming', 'Science'].map((title) => ({
	id: `technology-${title.toLowerCase()}`,
	title,
	items: [] as UniverseItem[],
	searchText: title,
}));

export function getUniverseZones(progress: Pick<Progress, 'saved'>): UniverseZone[] {
	const savedIds = new Set(progress.saved);
	const savedClusters = clustersForInquiries(savedIds).filter((constellation) => constellation.items.length > 0);
	const groupedSavedIds = new Set(savedClusters.flatMap((constellation) => constellation.items.map((item) => item.id)));
	const otherSaved = uniqueItems([...savedIds].filter((id) => !groupedSavedIds.has(id)));
	if (otherSaved.length > 0) {
		savedClusters.push({
			id: 'saved-other',
			title: 'Other saved',
			items: otherSaved,
			searchText: ['Other saved', ...otherSaved.map((item) => item.searchText)].join(' '),
		});
	}

	const monthBuckets = new Map<string, UniverseItem[]>();
	for (const item of itemRecords.filter((entry) => Boolean(entry.date)).sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))) {
		const month = (item.date ?? '').slice(0, 7);
		const group = monthBuckets.get(month) ?? [];
		group.push(item);
		monthBuckets.set(month, group);
	}
	const recentClusters = [...monthBuckets.entries()].map(([month, items]) => {
		const [year, monthNumber] = month.split('-').map(Number);
		const title = new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
			new Date(Date.UTC(year, monthNumber - 1, 1)),
		);
		return {
			id: `recent-${month}`,
			title,
			items,
			searchText: [title, ...items.map((item) => item.searchText)].join(' '),
		};
	});

	const cultureClusters = clustersForInquiries();
	const filmClusterItems = uniqueItems(filmItems);
	const filmClusters: UniverseConstellation[] = filmClusterItems.length
		? [
				{
					id: 'film-references',
					title: 'Film references',
					items: filmClusterItems,
					searchText: ['Film references', ...filmClusterItems.map((item) => item.searchText)].join(' '),
				},
			]
		: [];

	return [
		makeZone('politics', 'Politics', 'topic', [], { x: 13, y: 54 }, 'small', 'No films here yet.'),
		makeZone('technology', 'Technology', 'topic', technologyConstellations, { x: 24, y: 23 }, 'medium'),
		makeZone('culture', 'Culture', 'topic', cultureClusters, { x: 50, y: 50 }, 'large'),
		makeZone('sport', 'Sport', 'topic', [], { x: 86, y: 62 }, 'small', 'No films here yet.'),
		makeZone('film', 'Film', 'topic', filmClusters, { x: 77, y: 27 }, 'medium', 'No films here yet.'),
		makeZone('saved', 'Saved', 'collection', savedClusters, { x: 39, y: 82 }, 'small', 'Save a piece to keep it close.'),
		makeZone('recent', 'Recent', 'collection', recentClusters, { x: 65, y: 82 }, 'small', 'New pieces will gather here.'),
	];
}

export const universeItems = itemRecords;

export function getItemById(id: string): UniverseItem | undefined {
	return itemById.get(id);
}
