"use client";

import { Button } from "@/components/ui/button";
import { CategoryFilter } from "./category-filter";
import { SortSelector } from "./sort-selector";
import { X } from "lucide-react";

interface FilterPanelProps {
	categories: string[];
	onCategoriesChange: (categories: string[]) => void;
	sortBy: "name" | "company" | "value";
	onSortChange: (sort: "name" | "company" | "value") => void;
	onClearAll: () => void;
	hasActiveFilters: boolean;
}

export function FilterPanel({
	categories,
	onCategoriesChange,
	sortBy,
	onSortChange,
	onClearAll,
	hasActiveFilters,
}: FilterPanelProps) {
	return (
		<div className="space-y-6 rounded-lg border p-4">
			<div className="flex items-center justify-between">
				<h2 className="font-semibold">Filters</h2>
				{hasActiveFilters && (
					<Button
						variant="ghost"
						size="sm"
						onClick={onClearAll}
						className="h-auto gap-1 p-0 text-xs text-muted-foreground hover:text-foreground"
					>
						<X className="h-3 w-3" />
						Clear all
					</Button>
				)}
			</div>

			<CategoryFilter selected={categories} onChange={onCategoriesChange} />

			<div className="border-t pt-4">
				<SortSelector selected={sortBy} onChange={onSortChange} />
			</div>
		</div>
	);
}
