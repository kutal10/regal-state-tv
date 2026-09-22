export type PricingTier = {
	id: string;
	name: string;
	price: string;
	priceNote?: string;
	features: string[];
	cta?: { label: string; href: string };
	optin?: { line: string; placeholder: string; button: string };
	featured?: boolean;
	limited?: string;
};

export const pricingTiers: PricingTier[] = [
	{
		id: 'free',
		name: 'Free',
		price: '£0',
		priceNote: '100% Free',
		features: [
			'Sample learning tracks',
			'Sample notes and sources for some videos',
			'Ad free + private server 4k streaming',
		],
		optin: {
			line: 'Enter your email to get free access',
			placeholder: 'you@email.com',
			button: 'Get instant access',
		},
	},
	{
		id: 'core',
		name: 'Core Membership',
		price: '£20',
		priceNote: 'per month',
		features: [
			'Curated video learning tracks',
			"Extended director's cuts",
			'Shorter form behind the scenes videos',
			'Episodes not available to public',
			'Full uncut interviews with guests',
		],
		cta: { label: 'Become a member', href: '#' },
	},
	{
		id: 'founding',
		name: 'Founding Member',
		price: '£150',
		priceNote: 'per month, or £1,000 per year',
		features: [
			"Monthly private Q&A's",
			'Help develop future essay topics',
			'End-credits attribution',
			'Direct messaging access',
		],
		cta: { label: 'Claim a founding seat', href: '#' },
		featured: true,
		limited: 'Limited to 25 members',
	},
];
