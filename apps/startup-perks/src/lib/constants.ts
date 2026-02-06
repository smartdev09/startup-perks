export const SITE_CONFIG = {
	name: "startup perks",
	shortName: "startup perks",
	description:
		"Discover $1M+ in free cloud credits, AI API access, and developer tools for startups",
	url: "https://startupperks.directory",
	ogImage: "/og-image.png",
	links: {
		github: "https://github.com/yourusername/startup-perks",
	},
} as const;

export const CATEGORIES = [
	"cloud",
	"ai",
	"database",
	"analytics",
	"infrastructure",
	"security",
	"saas",
	"other",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
	cloud: "Cloud Credits",
	ai: "AI & ML",
	database: "Databases",
	analytics: "Analytics",
	infrastructure: "Infrastructure",
	security: "Security",
	saas: "SaaS Tools",
	other: "Other",
};

export const CATEGORY_COLORS: Record<Category, string> = {
	cloud: "bg-blue-500",
	ai: "bg-purple-500",
	database: "bg-green-500",
	analytics: "bg-yellow-500",
	infrastructure: "bg-red-500",
	security: "bg-indigo-500",
	saas: "bg-pink-500",
	other: "bg-gray-500",
};
