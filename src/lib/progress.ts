export type ProgressTier = 'visited' | 'played' | 'seen' | 'saved';

export type Progress = {
	visited: string[];
	played: string[];
	seen: string[];
	saved: string[];
};

export const PROGRESS_KEY = 'rs_progress';
export const PROGRESS_EVENT = 'progress:change';

export type ProgressSnapshot = {
	visited: string[];
	played: string[];
	seen: string[];
	saved: string[];
};

const EMPTY: Progress = { visited: [], played: [], seen: [], saved: [] };

function unique(...lists: string[][]): string[] {
	return [...new Set(lists.flat())];
}

function normalize(value: unknown): Progress {
	if (!value || typeof value !== 'object') return { ...EMPTY };
	const record = value as Record<string, unknown>;
	const list = (key: ProgressTier) =>
		Array.isArray(record[key])
			? (record[key] as unknown[]).filter((slug): slug is string => typeof slug === 'string')
			: [];
	return {
		visited: list('visited'),
		played: list('played'),
		seen: list('seen'),
		saved: unique(list('saved')),
	};
}

export function loadProgress(): Progress {
	try {
		const raw = localStorage.getItem(PROGRESS_KEY);
		return raw ? normalize(JSON.parse(raw)) : { ...EMPTY };
	} catch {
		return { ...EMPTY };
	}
}

export function snapshot(progress: Progress): ProgressSnapshot {
	return {
		seen: progress.seen,
		played: unique(progress.played, progress.seen),
		visited: unique(progress.visited, progress.played, progress.seen),
		saved: progress.saved,
	};
}

export function applyProgressAttributes(
	progress: Progress,
	root: HTMLElement = document.documentElement,
) {
	const current = snapshot(progress);
	root.dataset.visited = current.visited.join(' ');
	root.dataset.played = current.played.join(' ');
	root.dataset.seen = current.seen.join(' ');
	root.dataset.saved = current.saved.join(' ');
}

function save(progress: Progress) {
	try {
		localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
	} catch {
		/* storage unavailable */
	}
	applyProgressAttributes(progress);
	document.dispatchEvent(new CustomEvent(PROGRESS_EVENT, { bubbles: true, detail: snapshot(progress) }));
}

export function mark(tier: ProgressTier, slug: string): Progress {
	const progress = loadProgress();
	if (!progress[tier].includes(slug)) {
		progress[tier] = [...progress[tier], slug];
		save(progress);
	}
	return progress;
}

export function unmark(tier: ProgressTier, slug: string): Progress {
	const progress = loadProgress();
	if (progress[tier].includes(slug)) {
		progress[tier] = progress[tier].filter((entry) => entry !== slug);
		save(progress);
	}
	return progress;
}

export function toggle(tier: ProgressTier, slug: string): Progress {
	return loadProgress()[tier].includes(slug) ? unmark(tier, slug) : mark(tier, slug);
}

export function clearProgress(): Progress {
	save({ ...EMPTY });
	return { ...EMPTY };
}
