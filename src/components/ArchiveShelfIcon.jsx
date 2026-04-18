import { Archive, Clapperboard, Lightbulb } from 'lucide-react';

const iconMap = {
	collected: Archive,
	'in-progress': Clapperboard,
	unopened: Lightbulb,
};

export default function ArchiveShelfIcon({ shelfId, className = '' }) {
	const Icon = iconMap[shelfId] ?? Archive;

	return <Icon className={className} strokeWidth={1.9} aria-hidden="true" />;
}
