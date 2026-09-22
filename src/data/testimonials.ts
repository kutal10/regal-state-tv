export type Testimonial = {
	name: string;
	handle: string;
	quote: string;
	texture: number;
};

export const testimonials: Testimonial[] = [
	{
		name: 'Mara Ellison',
		handle: '@maraellison',
		quote:
			'I put an episode on while folding laundry and ended up sitting on the floor for forty minutes. Nobody talks to the camera like this anymore.',
		texture: 3,
	},
	{
		name: 'Devin Okafor',
		handle: 'Documentary Editor',
		quote:
			'Regal State treats silence as material. There is a cut in the second film where nothing happens for nine seconds and it is the loudest thing I watched all year.',
		texture: 8,
	},
	{
		name: 'Priya Raghavan',
		handle: '@priyargh',
		quote:
			'No score telling me how to feel. No recap of what I just watched. Just a person, a place, and enough room to make up my own mind.',
		texture: 14,
	},
	{
		name: 'Tomas Lindqvist',
		handle: 'Archivist',
		quote:
			'I have been recommending this channel to everyone who says documentaries have gotten too slick. This is what the form can still be.',
		texture: 19,
	},
	{
		name: 'June Castellano',
		handle: '@junecast',
		quote:
			'It feels handmade in the best way. You can hear the room in the recordings. You can feel someone deciding where to point the lens.',
		texture: 25,
	},
	{
		name: 'Adeola Bankole',
		handle: 'Writer',
		quote:
			'The episodes hold a question open instead of answering it. I keep returning to the same three and finding a different film each time.',
		texture: 6,
	},
	{
		name: 'Marcus Feld',
		handle: '@marcusfeld',
		quote:
			'Watched the whole catalog in a weekend and then went back to the start with a notebook. That has not happened to me since university.',
		texture: 11,
	},
	{
		name: 'Sofia Reyes',
		handle: 'Sound Designer',
		quote:
			'The field recording is doing so much quiet work here. Nothing is cleaned up past the point of honesty, and the films are better for it.',
		texture: 17,
	},
	{
		name: 'Henrik Dahl',
		handle: '@henrikdahl',
		quote:
			'Every other platform is racing to guess what I want next. This one just shows me people and lets me sit with them. That is the whole pitch.',
		texture: 22,
	},
	{
		name: 'Nadia Cheriet',
		handle: 'Lecturer, Film Studies',
		quote:
			'I now teach two of these episodes. My students argue about them the way they argue about fiction, which is the highest thing I can say.',
		texture: 28,
	},
	{
		name: 'Owen Whitaker',
		handle: '@owenw',
		quote:
			'Long takes, patient edits, subjects who are allowed to be ordinary. It is the only channel I trust to actually watch a person instead of a story.',
		texture: 2,
	},
	{
		name: 'Lena Brandt',
		handle: '@lenabrandt',
		quote:
			'I came for the one about the stairwell and stayed for the rest. Whoever is making these clearly sits with an idea long after it stops being convenient.',
		texture: 9,
	},
	{
		name: 'Rafael Moreno',
		handle: 'Publisher',
		quote:
			'There is no algorithm here and you can feel it immediately. What you get instead is intent — somebody chose these films, in this order, for a reason.',
		texture: 16,
	},
	{
		name: 'Iris Nakamura',
		handle: '@irisnakamura',
		quote:
			'I have watched the same episode four times and I still notice a new frame, a new pause. Nothing about it is trying to win me over.',
		texture: 24,
	},
];

const half = Math.ceil(testimonials.length / 2);

export const testimonialRows: Testimonial[][] = [
	testimonials.slice(0, half),
	testimonials.slice(half),
];
