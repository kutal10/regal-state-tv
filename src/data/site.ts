export type EditionState = 'Collected' | 'In Progress' | 'Unopened';

export type Edition = {
	index: number;
	slug: string;
	title: string;
	strapline: string;
	synopsis: string;
	duration: string;
	year: string;
	theme: string;
	state: EditionState;
	completion: number;
	palette: {
		start: string;
		end: string;
		accent: string;
	};
	headline: string;
	path: string;
	companions: { label: string; meta: string; copy: string }[];
	notes: string[];
	extracts: { time: string; title: string; note: string }[];
	checklist: { label: string; done: boolean }[];
	unlock: string;
	quote: { text: string; speaker: string; role: string };
};

export const previewBasePath = '/prototype';

export const editions: Edition[] = [
	{
		index: 6,
		slug: 'midnight-interval',
		title: 'Midnight Interval',
		strapline: 'A quiet study of performance, memory, and the room after applause.',
		synopsis:
			'A 32-minute film about rehearsal residue, private ritual, and what remains once a room empties.',
		duration: '32 min',
		year: '2026',
		theme: 'Performance and memory',
		state: 'In Progress',
		completion: 74,
		palette: { start: '#2f3339', end: '#14181f', accent: '#c9b18d' },
		headline: 'Main film first, then commentary, interview, extracts, and one hidden artifact.',
		path: 'Conversations on craft',
		companions: [
			{ label: 'Director commentary', meta: '11 min', copy: 'Room tone, pause, and late cuts.' },
			{ label: 'Full interview', meta: '26 min', copy: 'A full conversation on rehearsal and endings.' },
			{ label: 'Selected extracts', meta: '6 min', copy: 'Three fragments that point back to the whole work.' },
		],
		notes: ['Begins after the event, not during it.', 'Corridor scenes act like memory cues.', 'Silence does structural work.'],
		extracts: [
			{ time: '03:18', title: 'Curtain line', note: 'A held pause becomes architectural.' },
			{ time: '12:46', title: 'Room reset', note: 'The film changes temperature.' },
			{ time: '24:03', title: 'After-sound', note: 'Footsteps replace score.' },
		],
		checklist: [
			{ label: 'Main film watched', done: true },
			{ label: 'Commentary opened', done: true },
			{ label: 'Interview explored', done: true },
			{ label: 'Bonus artifact revealed', done: false },
		],
		unlock: 'Unlocks a contact-sheet style production note after the final extract is opened.',
		quote: {
			text: 'The real subject was the room learning how to hold what had just happened.',
			speaker: 'Mara Eno',
			role: 'Director',
		},
	},
	{
		index: 5,
		slug: 'soft-proof',
		title: 'Soft Proof',
		strapline: 'A film about revision, language, and the dignity of unfinished work.',
		synopsis: 'A 28-minute portrait of writers and editors shaping a text through deletion and rhythm.',
		duration: '28 min',
		year: '2026',
		theme: 'Language and revision',
		state: 'Collected',
		completion: 100,
		palette: { start: '#3a3431', end: '#171412', accent: '#d4c3a8' },
		headline: 'Collected edition with redline stills, transcript fragments, and margin notes.',
		path: 'Language under pressure',
		companions: [
			{ label: 'Director commentary', meta: '8 min', copy: 'Editing by subtraction.' },
			{ label: 'Full interview', meta: '22 min', copy: 'What gets removed and why it matters.' },
			{ label: 'Selected extracts', meta: '5 min', copy: 'Cadence, deletion, and page movement.' },
		],
		notes: ['Pacing mirrors a redraft cycle.', 'Paper texture behaves like landscape.', 'Chapter names are removed words.'],
		extracts: [
			{ time: '05:44', title: 'First cut', note: 'The page clears when a paragraph goes.' },
			{ time: '14:02', title: 'Desk light', note: 'Warmth carries the transition.' },
			{ time: '21:17', title: 'Margin return', note: 'The voice softens before it lands.' },
		],
		checklist: [
			{ label: 'Main film watched', done: true },
			{ label: 'Commentary opened', done: true },
			{ label: 'Interview explored', done: true },
			{ label: 'Bonus artifact revealed', done: true },
		],
		unlock: 'Completed. The hidden extra is a folded set of redline stills.',
		quote: {
			text: 'Revision is proof that attention stayed in the room.',
			speaker: 'Leonie Park',
			role: 'Editor',
		},
	},
	{
		index: 4,
		slug: 'after-the-cut',
		title: 'After the Cut',
		strapline: 'A restrained portrait of editors who measure emotion in frames.',
		synopsis: 'A 30-minute film on post-production as interpretation, pressure, and authorship.',
		duration: '30 min',
		year: '2025',
		theme: 'Editing and structure',
		state: 'Collected',
		completion: 100,
		palette: { start: '#2f3438', end: '#101419', accent: '#b9c4d3' },
		headline: 'Collected edition centered on a deep edit breakdown and sequence map.',
		path: 'Conversations on craft',
		companions: [
			{ label: 'Director commentary', meta: '10 min', copy: 'Timing as pressure.' },
			{ label: 'Full interview', meta: '24 min', copy: 'Invisible decisions and visible feeling.' },
			{ label: 'Selected extracts', meta: '7 min', copy: 'Three structural turns.' },
		],
		notes: ['Extracts never replace the whole film.', 'Waveforms read like notation.', 'The final title appears on completion.'],
		extracts: [
			{ time: '04:11', title: 'Before the trim', note: 'Descriptive, not yet inevitable.' },
			{ time: '16:52', title: 'Frame pressure', note: 'Two frames change the gesture.' },
			{ time: '27:09', title: 'Fade to room tone', note: 'Silence earns the ending.' },
		],
		checklist: [
			{ label: 'Main film watched', done: true },
			{ label: 'Commentary opened', done: true },
			{ label: 'Interview explored', done: true },
			{ label: 'Bonus artifact revealed', done: true },
		],
		unlock: 'Completed. The hidden extra is a map of alternate sequence orders.',
		quote: {
			text: 'Editing is where doubt becomes form.',
			speaker: 'Saul Mercer',
			role: 'Editor',
		},
	},
	{
		index: 3,
		slug: 'quiet-draft',
		title: 'Quiet Draft',
		strapline: 'An intimate look at note-taking, iteration, and patient thinking.',
		synopsis: 'A 24-minute film about notebooks, references, and the routines that let work change shape.',
		duration: '24 min',
		year: '2025',
		theme: 'Research and process',
		state: 'Collected',
		completion: 100,
		palette: { start: '#38352f', end: '#15130f', accent: '#c8b899' },
		headline: 'Collected edition with written notes, field references, and timestamp fragments.',
		path: 'Field notes',
		companions: [
			{ label: 'Director commentary', meta: '7 min', copy: 'What the notebook does.' },
			{ label: 'Full interview', meta: '21 min', copy: 'Practice before outcome.' },
			{ label: 'Selected extracts', meta: '5 min', copy: 'Hands, margins, and surfaces.' },
		],
		notes: ['Research feels tactile, not explanatory.', 'Tabletop layouts act like maps.', 'Every note points to a timestamp.'],
		extracts: [
			{ time: '02:57', title: 'Margin walk', note: 'The page edge becomes a horizon.' },
			{ time: '09:40', title: 'Reference stack', note: 'Objects arrive before argument.' },
			{ time: '18:26', title: 'Late pencil', note: 'One annotation reframes the passage.' },
		],
		checklist: [
			{ label: 'Main film watched', done: true },
			{ label: 'Commentary opened', done: true },
			{ label: 'Interview explored', done: true },
			{ label: 'Bonus artifact revealed', done: true },
		],
		unlock: 'Completed. The hidden extra is a field-reference spread.',
		quote: {
			text: 'A draft protects the place where thought can stay long enough to sharpen.',
			speaker: 'Ari Sol',
			role: 'Writer',
		},
	},
	{
		index: 2,
		slug: 'static-bloom',
		title: 'Static Bloom',
		strapline: 'A film tracing image-making through texture, light, and controlled imperfection.',
		synopsis: 'A 27-minute study of still-image practice where surface becomes emotional language.',
		duration: '27 min',
		year: '2025',
		theme: 'Image and surface',
		state: 'In Progress',
		completion: 42,
		palette: { start: '#312f35', end: '#141319', accent: '#b7b0d3' },
		headline: 'In-progress edition with one saved quote and a hidden lens-note layer still closed.',
		path: 'Material studies',
		companions: [
			{ label: 'Director commentary', meta: '9 min', copy: 'Texture as evidence.' },
			{ label: 'Full interview', meta: '20 min', copy: 'Surface, softness, and truth.' },
			{ label: 'Selected extracts', meta: '4 min', copy: 'Grain, falloff, and crop.' },
		],
		notes: ['Stills behave like plates in a monograph.', 'Graphite and pewter anchor the tone.', 'Hidden notes open after extract two.'],
		extracts: [
			{ time: '06:04', title: 'Grain study', note: 'Texture is held until it feels structural.' },
			{ time: '13:29', title: 'Window falloff', note: 'Light taper becomes narrative.' },
			{ time: '22:48', title: 'Proof sheet', note: 'Sequencing becomes the subject.' },
		],
		checklist: [
			{ label: 'Main film watched', done: true },
			{ label: 'Commentary opened', done: false },
			{ label: 'Interview explored', done: true },
			{ label: 'Bonus artifact revealed', done: false },
		],
		unlock: 'Unlocks a set of contact strips and lens notes after the commentary is opened.',
		quote: {
			text: 'Perfection often removes the proof that a person had to make the image.',
			speaker: 'Jun Hale',
			role: 'Photographer',
		},
	},
	{
		index: 1,
		slug: 'body-of-noise',
		title: 'Body of Noise',
		strapline: 'A measured portrait of listening, improvisation, and sonic architecture.',
		synopsis: 'A 29-minute film about sound worlds built from rehearsal fragments and physical space.',
		duration: '29 min',
		year: '2025',
		theme: 'Listening and sound',
		state: 'Unopened',
		completion: 0,
		palette: { start: '#31363a', end: '#14181a', accent: '#aeb8be' },
		headline: 'Reserved on the shelf, with all companion layers waiting intact.',
		path: 'Sound and pressure',
		companions: [
			{ label: 'Director commentary', meta: '9 min', copy: 'Building the sonic room.' },
			{ label: 'Full interview', meta: '23 min', copy: 'Improvisation as architecture.' },
			{ label: 'Selected extracts', meta: '5 min', copy: 'Three listening turns.' },
		],
		notes: ['Listening arrives before orientation.', 'Waveform density becomes motif.', 'Path placement favors craft over genre.'],
		extracts: [
			{ time: '03:03', title: 'Breath lead-in', note: 'Air arrives before cue.' },
			{ time: '11:31', title: 'Floor resonance', note: 'The room becomes the instrument.' },
			{ time: '25:18', title: 'Last decay', note: 'One frequency hangs after the cut.' },
		],
		checklist: [
			{ label: 'Main film watched', done: false },
			{ label: 'Commentary opened', done: false },
			{ label: 'Interview explored', done: false },
			{ label: 'Bonus artifact revealed', done: false },
		],
		unlock: 'Reserved. A listening map appears after the first full watch.',
		quote: {
			text: 'Listening is a way of arranging the room so meaning has somewhere to land.',
			speaker: 'Niko Vale',
			role: 'Composer',
		},
	},
];

export const featuredEdition = editions[0];

export const archiveStats = {
	totalEditions: 24,
	collectedEditions: 11,
	inProgressEditions: 5,
	pathsOpen: 4,
};

export const curatedPath = {
	title: 'Conversations on craft',
	summary: 'A guided route through rehearsal, revision, and editing that rewards slow attention.',
	description: 'Each stop layers a main film with commentary, interview, extracts, and one hidden artifact.',
	stops: [
		{ label: 'Begin with stillness', editionSlug: 'midnight-interval', note: 'Enter through performance after the event.' },
		{ label: 'Move into language', editionSlug: 'soft-proof', note: 'Shift into revision and removal.' },
		{ label: 'End with structure', editionSlug: 'after-the-cut', note: 'Finish where timing becomes authorship.' },
	],
};

export const viewerProfile = {
	handle: 'Archive 04',
	role: 'Founding member',
	completion: 68,
	currentFocus: 'This week: sound, pause, and late-stage editing decisions.',
	favouriteGuests: ['Mara Eno', 'Saul Mercer', 'Leonie Park'],
	savedNotes: [
		'The room learning how to hold what had just happened.',
		'Revision is proof that attention stayed in the room.',
		'Editing is where doubt becomes form.',
	],
	collectedSlugs: ['soft-proof', 'after-the-cut', 'quiet-draft'],
	inProgressSlugs: ['midnight-interval', 'static-bloom'],
};

export type ArchiveShelfId = 'collected' | 'in-progress' | 'unopened';

export const archiveShelves: {
	id: ArchiveShelfId;
	label: string;
	state: EditionState;
	href: string;
	description: string;
}[] = [
	{
		id: 'collected',
		label: 'Core Works',
		state: 'Collected',
		href: `${previewBasePath}/archive/collected`,
		description: 'Finished editions that hold the center of the archive and feel ready to return to.',
	},
	{
		id: 'in-progress',
		label: 'Rough Cuts',
		state: 'In Progress',
		href: `${previewBasePath}/archive/in-progress`,
		description: 'Active editions still taking shape, with open threads, partial notes, and room to keep working.',
	},
	{
		id: 'unopened',
		label: 'Future Ideas',
		state: 'Unopened',
		href: `${previewBasePath}/archive/unopened`,
		description: 'Set-aside editions waiting for the right moment to be opened and explored.',
	},
];

export type EditionLayerId = 'encounter' | 'interpretation' | 'context' | 'fragments' | 'archive';

export type EditionLayer = {
	id: EditionLayerId;
	step: number;
	stage: string;
	label: string;
	meta: string;
	copy: string;
	href: string;
};

export function getEditionLayerHref(slug: string, layerId: EditionLayerId) {
	return `${previewBasePath}/editions/${slug}/${layerId}`;
}

export function getEditionLayers(edition: Edition): EditionLayer[] {
	const completedCount = edition.checklist.filter((item) => item.done).length;

	return [
		{
			id: 'encounter',
			step: 1,
			stage: 'Encounter',
			label: 'Main film',
			meta: edition.duration,
			copy: edition.strapline,
			href: getEditionLayerHref(edition.slug, 'encounter'),
		},
		{
			id: 'interpretation',
			step: 2,
			stage: 'Interpretation',
			label: edition.companions[0]?.label ?? 'Commentary',
			meta: edition.companions[0]?.meta ?? '',
			copy: edition.companions[0]?.copy ?? 'Editorial interpretation sits closest to the film.',
			href: getEditionLayerHref(edition.slug, 'interpretation'),
		},
		{
			id: 'context',
			step: 3,
			stage: 'Context',
			label: edition.companions[1]?.label ?? 'Conversation',
			meta: edition.companions[1]?.meta ?? '',
			copy: edition.companions[1]?.copy ?? 'Context widens the field around the main work.',
			href: getEditionLayerHref(edition.slug, 'context'),
		},
		{
			id: 'fragments',
			step: 4,
			stage: 'Fragments',
			label: edition.companions[2]?.label ?? 'Extracts',
			meta: edition.companions[2]?.meta ?? '',
			copy: edition.companions[2]?.copy ?? 'Fragments are entry points back into the whole edition.',
			href: getEditionLayerHref(edition.slug, 'fragments'),
		},
		{
			id: 'archive',
			step: 5,
			stage: 'Archive',
			label: 'Hidden layer',
			meta: `${completedCount} of ${edition.checklist.length} opened`,
			copy: edition.unlock,
			href: getEditionLayerHref(edition.slug, 'archive'),
		},
	];
}

export function getEditionLayer(edition: Edition, layerId: EditionLayerId) {
	return getEditionLayers(edition).find((layer) => layer.id === layerId);
}

export function getNextEditionLayer(edition: Edition, layerId: EditionLayerId) {
	const layers = getEditionLayers(edition);
	const currentIndex = layers.findIndex((layer) => layer.id === layerId);

	if (currentIndex < 0 || currentIndex === layers.length - 1) {
		return undefined;
	}

	return layers[currentIndex + 1];
}

export function getPreviousEditionLayer(edition: Edition, layerId: EditionLayerId) {
	const layers = getEditionLayers(edition);
	const currentIndex = layers.findIndex((layer) => layer.id === layerId);

	if (currentIndex <= 0) {
		return undefined;
	}

	return layers[currentIndex - 1];
}

export function getEditionsForShelf(shelfId: ArchiveShelfId) {
	const shelf = archiveShelves.find((item) => item.id === shelfId);

	if (!shelf) {
		return [];
	}

	return editions.filter((edition) => edition.state === shelf.state);
}
export function getEditionBySlug(slug: string) {
	return editions.find((edition) => edition.slug === slug);
}

