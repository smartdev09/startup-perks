import type { StartupPerk } from "@directories/data/perks";
import { SITE_CONFIG } from "./constants";

/**
 * Generate Organization JSON-LD schema
 */
export function generateOrganizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: SITE_CONFIG.name,
		url: SITE_CONFIG.url,
		logo: `${SITE_CONFIG.url}/logo.png`,
		description: SITE_CONFIG.description,
		sameAs: [SITE_CONFIG.links.github],
	};
}

/**
 * Generate WebSite JSON-LD schema with search action
 */
export function generateWebSiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE_CONFIG.name,
		url: SITE_CONFIG.url,
		description: SITE_CONFIG.description,
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${SITE_CONFIG.url}/perks?search={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
	};
}

/**
 * Generate ItemList JSON-LD schema for perk listings
 */
export function generateItemListSchema(
	perks: StartupPerk[],
	listName: string,
) {
	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: listName,
		numberOfItems: perks.length,
		itemListElement: perks.map((perk, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "Product",
				name: perk.name,
				description: perk.description,
				provider: {
					"@type": "Organization",
					name: perk.company,
				},
				offers: {
					"@type": "Offer",
					description: perk.credits,
					availability: "https://schema.org/InStock",
				},
			},
		})),
	};
}

/**
 * Generate Product JSON-LD schema for individual perk
 */
export function generatePerkSchema(perk: StartupPerk) {
	return {
		"@context": "https://schema.org",
		"@type": "Product",
		name: perk.name,
		description: perk.description,
		provider: {
			"@type": "Organization",
			name: perk.company,
		},
		offers: {
			"@type": "Offer",
			description: perk.credits,
			availability: "https://schema.org/InStock",
			eligibility: perk.eligibility,
		},
		category: perk.category,
	};
}

/**
 * Generate BreadcrumbList JSON-LD schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: `${SITE_CONFIG.url}${item.url}`,
		})),
	};
}
