export type ArtifactKind = 'video' | 'note' | 'conversation';
export type ArtifactState = 'released' | 'rough' | 'idea';

export type Reference = {
	label: string;
	meta: string;
};

export type Artifact = {
	slug: string;
	title: string;
	kind: ArtifactKind;
	state: ArtifactState;
	texture: number;
	youtubeId?: string;
	duration: string;
	date: string;
	summary: string;
	questions: string[];
	triggeredBy: string;
	references: Reference[];
	rejected?: string[];
	contradicts?: { slug: string; label: string };
	openQuestions: string[];
	nextMove?: string;
};

export type Idea = {
	slug: string;
	title: string;
	state: Extract<ArtifactState, 'idea'>;
	texture: number;
	line: string;
	questions: string[];
};

export type ArchiveTier = {
	id: ArtifactState;
	label: string;
	line: string;
};

export const archiveTiers: ArchiveTier[] = [
	{ id: 'released', label: 'Released', line: 'Finished work, ready to return to.' },
	{ id: 'rough', label: 'Rough Cuts', line: 'In motion — open threads, partial notes.' },
	{ id: 'idea', label: 'Future Ideas', line: 'Seeds held for the right moment. Not artifacts yet.' },
];

export type Inquiry = {
	slug: string;
	question: string;
	line: string;
	artifactSlugs: string[];
	openThreads: string[];
};

export const site = {
	name: 'Regal State',
	tagline: 'Curated independent documentaries',
	email: 'hello@regalstate.tv',
	instagram: 'https://www.instagram.com/regal_state',
	youtube: 'https://www.youtube.com/@regalstate',
};

export const inquiries: Inquiry[] = [
	{
		slug: 'repetition',
		question: 'Why do artists repeat themselves?',
		line: 'Essays on motifs, obsession, seriality, and sampling — repetition as a form of thinking, not a failure of imagination.',
		artifactSlugs: ['the-serial-impulse', 'notes-on-motifs'],
		openThreads: [
			'Is a motif discovered or installed?',
			'Where seriality becomes mannerism',
		],
	},
	{
		slug: 'visible-technique',
		question: 'What happens when technique becomes visible?',
		line: 'Essays on editing, brushwork, virtuosity, and production — the moment the hand stops hiding.',
		artifactSlugs: ['the-serial-impulse', 'grain-and-control'],
		openThreads: [
			'Can a cut be honest?',
			'Virtuosity as a mask for doubt',
		],
	},
	{
		slug: 'ugliness',
		question: 'Can ugliness be beautiful?',
		line: 'Essays connecting punk, brutalism, distortion, and wear — value systems that begin where polish ends.',
		artifactSlugs: ['against-polish'],
		openThreads: [
			'Distress: evidence or costume?',
			'Who is permitted to be rough?',
		],
	},
];

export const artifacts: Artifact[] = [
	{
		slug: 'the-serial-impulse',
		title: 'The Serial Impulse',
		kind: 'video',
		state: 'rough',
		texture: 4,
		youtubeId: 'n0pzk9zhls0',
		duration: '24 min',
		date: '2026-08-14',
		summary:
			'On repetition as a working method: why the same frame, phrase, or figure returns across a body of work, and what accumulates between returns.',
		questions: ['repetition', 'visible-technique'],
		triggeredBy:
			'Reading Deleuze on Bacon while rewatching Warhol screen tests on a train — two theories of repetition that refuse to meet.',
		references: [
			{ label: 'Francis Bacon — triptychs', meta: 'painting' },
			{ label: 'Andy Warhol — Screen Tests', meta: 'film, 1964–66' },
			{ label: 'Gilles Deleuze — Logic of Sensation', meta: 'book, 1981' },
		],
		rejected: [
			'A Warhol-only episode — too safe, too single-artist',
			'A taxonomy of repetition types — felt like a filing system, not an argument',
		],
		openQuestions: [
			'Is repetition the subject or the method?',
			'When does a series stop being a question?',
		],
		nextMove: 'The question drifts toward space — what buildings repeat without meaning to.',
	},
	{
		slug: 'notes-on-motifs',
		title: 'Notes on Motifs',
		kind: 'note',
		state: 'rough',
		texture: 11,
		duration: '7 min read',
		date: '2026-08-02',
		summary:
			'Fragments toward a definition of a motif — the smallest unit of an obsession — drawn from notebooks and three films that keep coming back.',
		questions: ['repetition'],
		triggeredBy:
			'Noticing that the same stairwell appears in four different projects, and that no one planned it.',
		references: [
			{ label: 'Chantal Akerman — Hotel Monterey', meta: 'film, 1972' },
			{ label: 'Ed Ruscha — Twentysix Gasoline Stations', meta: 'book, 1963' },
		],
		rejected: [
			'A definition by example, front-loaded — killed it before it read like a glossary',
		],
		openQuestions: [
			'Is a motif a memory or an instruction?',
			'Can a motif be chosen, or only noticed?',
		],
		nextMove: 'Sit with Hotel Monterey’s stairwell until it says why it returns.',
	},
	{
		slug: 'grain-and-control',
		title: 'Grain and Control',
		kind: 'video',
		state: 'released',
		texture: 17,
		youtubeId: 'n0pzk9zhls0',
		duration: '31 min',
		date: '2026-07-11',
		summary:
			'A conversation on texture as evidence of a person — what 16mm, tape hiss, and visible brushwork promise, and what they can fake.',
		questions: ['visible-technique', 'ugliness'],
		triggeredBy:
			'An argument about whether film grain means anything anymore, held in a kitchen, unresolved.',
		references: [
			{ label: 'Jean-Luc Godard — Breathless', meta: 'film, 1960' },
			{ label: 'Sigmar Polke — raster paintings', meta: 'painting' },
			{ label: 'Laura Mulvey — Death 24x a Second', meta: 'book, 2006' },
		],
		contradicts: { slug: 'against-polish', label: 'Against Polish' },
		rejected: [
			'A grain-versus-digital comparison chart — the chart won too easily',
			'Interviewing a colorist — the conversation kept sliding into gear talk',
		],
		openQuestions: [
			'Does texture still signal the handmade?',
			'Is imperfection a value or a style?',
		],
		nextMove: 'Push the fake-grain thread until it meets Against Polish on its own ground.',
	},
	{
		slug: 'against-polish',
		title: 'Against Polish',
		kind: 'video',
		state: 'released',
		texture: 23,
		youtubeId: 'n0pzk9zhls0',
		duration: '18 min',
		date: '2026-06-20',
		summary:
			'Punk, brutalism, and distortion share a suspicion of smoothness — but distress has its own academy. On roughness that is earned and roughness that is bought.',
		questions: ['ugliness'],
		triggeredBy:
			'Standing in front of a new building dressed to look old, and feeling lied to.',
		references: [
			{ label: 'Reyner Banham — The New Brutalism', meta: 'essay, 1955' },
			{ label: 'Beat Happening — Black Candy', meta: 'record, 1989' },
		],
		contradicts: { slug: 'grain-and-control', label: 'Grain and Control' },
		rejected: [
			'A brutalist-buildings photo essay — the images argued louder than the words',
			'Anything on distressed typography — the academy had gotten there first',
		],
		openQuestions: [
			'Who is permitted to be rough?',
			'Is wear a history or a finish?',
		],
		nextMove: 'Test the claim against sound: is distortion in music earned the same way?',
	},
	{
		slug: 'on-standing-still',
		title: 'On Standing Still',
		kind: 'conversation',
		state: 'released',
		texture: 29,
		youtubeId: 'n0pzk9zhls0',
		duration: '42 min',
		date: '2026-05-30',
		summary:
			'A long talk with a painter who has made the same painting for nine years — about discipline, refusal, and the difference between a practice and a habit.',
		questions: ['repetition', 'visible-technique'],
		triggeredBy:
			'Her studio: one canvas, one table, one knife, nothing else on the walls.',
		references: [
			{ label: 'Agnes Martin — writings', meta: 'lectures, 1970s' },
			{ label: 'Giorgio Morandi — still lifes', meta: 'painting' },
		],
		rejected: [
			'A montage of every painting she discarded — it turned refusal into a highlight reel',
		],
		openQuestions: [
			'Where is the line between a practice and a habit?',
			'What does refusal produce?',
		],
		nextMove: 'Return when the painting is finished — or when it stops being the same one.',
	},
];

export const ideas: Idea[] = [
	{
		slug: 'rooms-that-remember',
		title: 'Rooms That Remember',
		state: 'idea',
		texture: 7,
		line: 'On buildings, sound, and what a space keeps after the event — an essay on acoustics as memory.',
		questions: ['repetition', 'ugliness'],
	},
	{
		slug: 'the-unread-margin',
		title: 'The Unread Margin',
		state: 'idea',
		texture: 13,
		line: 'On annotation, marginalia, and the notes nobody was meant to see — where thinking actually lives.',
		questions: ['visible-technique'],
	},
	{
		slug: 'slow-tv-fast-world',
		title: 'Slow TV in a Fast World',
		state: 'idea',
		texture: 21,
		line: 'On long duration as a form of attention — and why slowness now reads as a statement.',
		questions: ['repetition'],
	},
];

export function getArtifactBySlug(slug: string): Artifact | undefined {
	return artifacts.find((artifact) => artifact.slug === slug);
}

export function getIdeaBySlug(slug: string): Idea | undefined {
	return ideas.find((idea) => idea.slug === slug);
}

export function getInquiryArtifacts(inquiry: Inquiry): Artifact[] {
	return inquiry.artifactSlugs
		.map(getArtifactBySlug)
		.filter((artifact): artifact is Artifact => Boolean(artifact));
}

export function getIdeasForQuestions(questionSlugs: string[]): Idea[] {
	return ideas.filter((idea) => idea.questions.some((slug) => questionSlugs.includes(slug)));
}

export function getChronologicalArtifacts(): Artifact[] {
	return [...artifacts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArtifactsForTier(tierId: ArtifactState): Artifact[] {
	if (tierId !== 'idea') {
		return getChronologicalArtifacts().filter((artifact) => artifact.state === tierId);
	}
	return [];
}

export function getIdeasForTier(tierId: ArtifactState): Idea[] {
	return tierId === 'idea' ? ideas : [];
}