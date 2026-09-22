import { artifacts, ideas, inquiries } from '../data/site';
import { packCircles, type PackedCircle } from './pack';
import { snapshot, type Progress, type ProgressSnapshot } from './progress';

export type BubbleTier = 'none' | 'visited' | 'played' | 'seen';

export type Bubble = {
	slug: string;
	title: string;
	seed: boolean;
	href?: string;
	duration: string;
	minutes: number | null;
	texture: number;
	question: string;
};

const BASE_RADIUS = 0.3;
const NOTE_FLOOR = 0.46;
const SEED_FLOOR = 0.38;

const TIER_FACTOR: Record<BubbleTier, number> = {
	none: 1,
	visited: 0.88,
	played: 0.72,
	seen: 0.55,
};

function parseMinutes(duration: string): number | null {
	const match = /^(\d+)\s*min/.exec(duration);
	return match ? Number(match[1]) : null;
}

function primaryQuestion(questionSlugs: string[]): string {
	return inquiries.find((inquiry) => inquiry.slug === questionSlugs[0])?.question ?? '';
}

export const bubbles: Bubble[] = [
	...artifacts.map((artifact) => ({
		slug: artifact.slug,
		title: artifact.title,
		seed: false,
		href: `/watch/${artifact.slug}`,
		duration: artifact.duration,
		minutes: artifact.youtubeId ? parseMinutes(artifact.duration) : null,
		texture: artifact.texture,
		question: primaryQuestion(artifact.questions),
	})),
	...ideas.map((idea) => ({
		slug: idea.slug,
		title: idea.title,
		seed: true,
		duration: 'seed',
		minutes: null,
		texture: idea.texture,
		question: primaryQuestion(idea.questions),
	})),
];

const longest = Math.max(...bubbles.map((bubble) => bubble.minutes ?? 0));

export function baseRadius(bubble: Bubble): number {
	if (bubble.minutes === null) {
		return BASE_RADIUS * (bubble.seed ? SEED_FLOOR : NOTE_FLOOR);
	}
	return BASE_RADIUS * Math.sqrt(bubble.minutes / longest);
}

export function tierFor(progress: ProgressSnapshot, slug: string): BubbleTier {
	if (progress.seen.includes(slug)) return 'seen';
	if (progress.played.includes(slug)) return 'played';
	if (progress.visited.includes(slug)) return 'visited';
	return 'none';
}

export function radiusFor(bubble: Bubble, tier: BubbleTier): number {
	return baseRadius(bubble) * TIER_FACTOR[tier];
}

export const totals = {
	items: bubbles.filter((bubble) => !bubble.seed).length,
	minutes: bubbles.reduce((sum, bubble) => sum + (bubble.minutes ?? 0), 0),
	seeds: bubbles.filter((bubble) => bubble.seed).length,
};

export function layout(progress: Progress): Map<string, PackedCircle> {
	const current = snapshot(progress);
	const packed = packCircles(
		bubbles.map((bubble) => ({
			id: bubble.slug,
			radius: radiusFor(bubble, tierFor(current, bubble.slug)),
		})),
	);
	return new Map(packed.map((circle) => [circle.id, circle] as const));
}

export function restingLayout(): Map<string, PackedCircle> {
	return layout({ visited: [], played: [], seen: [] });
}
