/**
 * Popular/Featured Perks
 * 
 * Helper functions for getting featured and popular perks
 */

import { getFeaturedPerks, startupPerks } from '../perks/startup-perks';
import type { PerkCategory, StartupPerk } from '../perks/startup-perks';

/**
 * Get featured perks (high-value programs)
 */
export const getPopularPerks = (): StartupPerk[] => {
  return getFeaturedPerks();
};

/**
 * Get top perks by category
 */
export const getTopPerksByCategory = (
  category: PerkCategory,
  limit = 5
): StartupPerk[] => {
  return startupPerks
    .filter((perk) => perk.category === category)
    .slice(0, limit);
};

/**
 * Get a random selection of featured perks
 */
export const getRandomFeaturedPerks = (count = 6): StartupPerk[] => {
  const featured = getFeaturedPerks();
  const shuffled = [...featured].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
