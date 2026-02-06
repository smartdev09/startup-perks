import type { MetadataRoute } from "next";
import { getAllPerks, getCategoriesWithCounts } from "@/data/queries";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://startupperks.directory";

	// Homepage
	const routes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1.0,
		},
		{
			url: `${baseUrl}/perks`,
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/contribute`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
	];

	// Category pages
	const categories = getCategoriesWithCounts();
	const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
		url: `${baseUrl}/perks/category/${category.category}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.8,
	}));

	// Individual perk pages
	const perks = getAllPerks();
	const perkRoutes: MetadataRoute.Sitemap = perks.map((perk) => ({
		url: `${baseUrl}/perks/${perk.id}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.7,
	}));

	return [...routes, ...categoryRoutes, ...perkRoutes];
}
