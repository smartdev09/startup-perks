import {
	type StartupPerk,
	type PerkCategory,
	getCategories,
	getFeaturedPerks,
	getPerkById,
	getPerksByCategory,
	startupPerks,
} from "@directories/data/perks";

/**
 * Get all perks
 */
export function getAllPerks(): StartupPerk[] {
	return startupPerks;
}

/**
 * Get a single perk by ID
 */
export function getPerk(id: string): StartupPerk | undefined {
	return getPerkById(id);
}

/**
 * Get perks by category
 */
export function getPerksByCategoryName(category: string): StartupPerk[] {
	return getPerksByCategory(category as PerkCategory);
}

/**
 * Get featured/popular perks
 */
export function getPopularPerks(): StartupPerk[] {
	return getFeaturedPerks();
}

/**
 * Get all categories with perk counts
 */
export function getCategoriesWithCounts() {
	return getCategories();
}

/**
 * Get site statistics
 */
export function getStats() {
	const perks = getAllPerks();
	const categories = getCategoriesWithCounts();

	// Estimate total value (rough calculation based on credit amounts)
	const estimatedValue = perks.reduce((total, perk) => {
		const match = perk.credits?.match(/\$([0-9,]+)/);
		if (match) {
			const value = Number.parseInt(match[1].replace(/,/g, ""), 10);
			return total + value;
		}
		return total;
	}, 0);

	return {
		totalPerks: perks.length,
		totalCategories: categories.length,
		estimatedValue,
		categories,
	};
}

/**
 * Extract numeric credit value from credits string for sorting/filtering
 */
export function extractCreditValue(creditsString: string | undefined): number {
	if (!creditsString) return 0;
	// Try to extract dollar amounts like $10,000 or $1,000,000
	const match = creditsString.match(/\$([0-9,]+)/);
	if (match) {
		return Number.parseInt(match[1].replace(/,/g, ""), 10);
	}
	return 0;
}

/**
 * Search perks by query string with enhanced matching
 * Searches across: name, company, description, eligibility, category, credits
 * Supports multi-word queries (all terms must match)
 */
export function searchPerks(query: string): StartupPerk[] {
	if (!query || query.trim() === "") {
		return getAllPerks();
	}

	const searchLower = query.toLowerCase().trim();
	const searchTerms = searchLower.split(/\s+/); // Split by whitespace

	return getAllPerks().filter((perk) => {
		// Create searchable text from all fields
		const searchableText = [
			perk.name,
			perk.company,
			perk.description,
			perk.category,
			perk.eligibility,
			perk.credits || "",
		].join(" ").toLowerCase();

		// Check if all search terms are found (AND logic for multiple words)
		return searchTerms.every(term => searchableText.includes(term));
	});
}

/**
 * Advanced filter options
 */
export interface FilterOptions {
	searchQuery?: string;
	categories?: string[];
	valueRange?: "low" | "medium" | "high" | "all";
	featuredOnly?: boolean;
	sortBy?: "name" | "company" | "value";
}

/**
 * Filter perks with advanced options
 */
export function filterPerks(options: FilterOptions = {}): StartupPerk[] {
	let perks = getAllPerks();

	// Apply search query
	if (options.searchQuery) {
		perks = searchPerks(options.searchQuery);
	}

	// Filter by categories
	if (options.categories && options.categories.length > 0) {
		perks = perks.filter((perk) => options.categories?.includes(perk.category));
	}

	// Filter by featured status
	if (options.featuredOnly) {
		const featuredPerks = getFeaturedPerks();
		const featuredIds = new Set(featuredPerks.map((p) => p.id));
		perks = perks.filter((perk) => featuredIds.has(perk.id));
	}

	// Filter by value range
	if (options.valueRange && options.valueRange !== "all") {
		perks = perks.filter((perk) => {
			const value = extractCreditValue(perk.credits);
			switch (options.valueRange) {
				case "low":
					return value > 0 && value < 10000;
				case "medium":
					return value >= 10000 && value < 50000;
				case "high":
					return value >= 50000;
				default:
					return true;
			}
		});
	}

	// Sort perks
	if (options.sortBy) {
		perks = [...perks].sort((a, b) => {
			switch (options.sortBy) {
				case "name":
					return a.name.localeCompare(b.name);
				case "company":
					return a.company.localeCompare(b.company);
				case "value": {
					const valueA = extractCreditValue(a.credits);
					const valueB = extractCreditValue(b.credits);
					return valueB - valueA; // Descending order
				}
				default:
					return 0;
			}
		});
	}

	return perks;
}
