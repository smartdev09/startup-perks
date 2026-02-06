"use client";

import { Button } from "@/components/ui/button";
import { CATEGORIES, CATEGORY_LABELS, type Category } from "@/lib/constants";
import { X } from "lucide-react";

interface CategoryFilterProps {
	selected: string[];
	onChange: (categories: string[]) => void;
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
	const toggleCategory = (category: string) => {
		if (selected.includes(category)) {
			onChange(selected.filter((c) => c !== category));
		} else {
			onChange([...selected, category]);
		}
	};

	const clearAll = () => {
		onChange([]);
	};

	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between">
				<h3 className="text-sm font-medium">Categories</h3>
				{selected.length > 0 && (
					<Button
						variant="ghost"
						size="sm"
						onClick={clearAll}
						className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
					>
						Clear all
					</Button>
				)}
			</div>
			<div className="flex flex-wrap gap-2">
				{CATEGORIES.map((category) => {
					const isSelected = selected.includes(category);
					return (
						<Button
							key={category}
							variant={isSelected ? "default" : "outline"}
							size="sm"
							onClick={() => toggleCategory(category)}
							className="text-xs"
						>
							{CATEGORY_LABELS[category as Category]}
							{isSelected && <X className="ml-1 h-3 w-3" />}
						</Button>
					);
				})}
			</div>
		</div>
	);
}
