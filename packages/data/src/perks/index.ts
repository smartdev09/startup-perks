/**
 * Startup Perks Data - Main Export
 * 
 * Re-exports all perk data, types, and utility functions
 */

export {
  startupPerks,
  categoryLabels,
  categoryColors,
  type PerkCategory,
  type StartupPerk,
} from './startup-perks';

/**
 * Get all perks for a specific category
 */
export const getPerksByCategory = (
  category: import('./startup-perks').PerkCategory
): import('./startup-perks').StartupPerk[] => {
  const { startupPerks } = require('./startup-perks');
  return startupPerks.filter((perk: any) => perk.category === category);
};

/**
 * Get all featured/high-value perks
 */
export const getFeaturedPerks = (): import('./startup-perks').StartupPerk[] => {
  const { startupPerks } = require('./startup-perks');
  return startupPerks.filter((perk: any) => perk.featured === true);
};

/**
 * Get a perk by its unique ID
 */
export const getPerkById = (
  id: string
): import('./startup-perks').StartupPerk | undefined => {
  const { startupPerks } = require('./startup-perks');
  return startupPerks.find((perk: any) => perk.id === id);
};

/**
 * Get all unique categories with perk counts
 */
export const getCategories = (): Array<{
  category: import('./startup-perks').PerkCategory;
  label: string;
  count: number;
}> => {
  const { startupPerks, categoryLabels } = require('./startup-perks');
  const categories = Object.keys(categoryLabels) as import('./startup-perks').PerkCategory[];
  
  return categories.map((category) => ({
    category,
    label: categoryLabels[category],
    count: startupPerks.filter((perk: any) => perk.category === category).length,
  }));
};

/**
 * Get total perks count
 */
export const getTotalPerksCount = (): number => {
  const { startupPerks } = require('./startup-perks');
  return startupPerks.length;
};
