export type PackItem = {
	id: string;
	radius: number;
};

export type PackedCircle = {
	id: string;
	x: number;
	y: number;
	radius: number;
};

const SAMPLE_STEP = 0.28;
const GAP = 0.006;
const FIT_RADIUS = 0.46;

export function packCircles(items: PackItem[]): PackedCircle[] {
	if (items.length === 0) return [];

	const sorted = [...items].sort(
		(a, b) => b.radius - a.radius || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0),
	);
	const step = Math.max(Math.min(...items.map((item) => item.radius)) * 0.32, 0.004);
	const placed: PackedCircle[] = [];

	for (const item of sorted) {
		let x = 0;
		let y = 0;

		if (placed.length > 0) {
			let settled = false;
			for (let t = 0; t < 720 && !settled; t += SAMPLE_STEP) {
				const distance = t * step;
				const candidateX = Math.cos(t) * distance;
				const candidateY = Math.sin(t) * distance;
				settled = placed.every((other) => {
					const dx = candidateX - other.x;
					const dy = candidateY - other.y;
					const clearance = item.radius + other.radius + GAP;
					return dx * dx + dy * dy >= clearance * clearance;
				});
				if (settled) {
					x = candidateX;
					y = candidateY;
				}
			}
			if (!settled) {
				x = placed.length * step * 8;
			}
		}

		placed.push({ id: item.id, x, y, radius: item.radius });
	}

	let extent = 0;
	for (const circle of placed) {
		extent = Math.max(extent, Math.hypot(circle.x, circle.y) + circle.radius);
	}
	const scale = extent > 0 ? FIT_RADIUS / extent : 1;

	return placed.map((circle) => ({
		id: circle.id,
		x: 0.5 + circle.x * scale,
		y: 0.5 + circle.y * scale,
		radius: circle.radius * scale,
	}));
}
