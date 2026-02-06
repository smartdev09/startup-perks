"use client";

import {
	parseAsArrayOf,
	parseAsString,
	parseAsStringEnum,
	useQueryStates,
} from "nuqs";
import { SearchInput } from "@/components/perks/search-input";
import { FilterPanel } from "@/components/perks/filter-panel";
import { PerkList } from "@/components/perks/perk-list";
import { filterPerks } from "@/data/queries";
import type { StartupPerk } from "@directories/data/perks";
import { useMemo } from "react";

interface PerksClientProps {
	initialPerks: StartupPerk[];
}

export function PerksClient({ initialPerks }: PerksClientProps) {
	const [filters, setFilters] = useQueryStates({
		search: parseAsString.withDefault(""),
		categories: parseAsArrayOf(parseAsString).withDefault([]),
		sort: parseAsStringEnum(["name", "company", "value"]).withDefault("name"),
	});

	const filteredPerks = useMemo(() => {
		return filterPerks({
			searchQuery: filters.search,
			categories: filters.categories,
			sortBy: filters.sort,
		});
	}, [filters.search, filters.categories, filters.sort]);

	const hasActiveFilters =
		filters.search !== "" ||
		filters.categories.length > 0 ||
		filters.sort !== "name";

	const clearAllFilters = () => {
		setFilters({
			search: "",
			categories: [],
			sort: "name",
		});
	};

	return (
		<div className="container mx-auto px-4 md:px-6 py-8 max-w-6xl">
			<div className="mb-8 space-y-4">
				<div>
					<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
						All Startup Perks
					</h1>
					<p className="text-sm text-[#878787]">
						Browse {initialPerks.length} startup perks and credits
					</p>
				</div>

				<SearchInput
					value={filters.search}
					onChange={(value) => setFilters({ search: value })}
				/>
			</div>

			<div className="grid gap-8 lg:grid-cols-[280px_1fr]">
				<aside className="lg:sticky lg:top-20 lg:h-fit">
					<FilterPanel
						categories={filters.categories}
						onCategoriesChange={(categories) => setFilters({ categories })}
						sortBy={filters.sort}
						onSortChange={(sort) => setFilters({ sort })}
						onClearAll={clearAllFilters}
						hasActiveFilters={hasActiveFilters}
					/>
				</aside>

				<main>
					<div className="mb-4 text-xs text-[#878787]">
						Showing {filteredPerks.length} of {initialPerks.length} perks
					</div>
					<PerkList perks={filteredPerks} />
				</main>
			</div>
		</div>
	);
}
