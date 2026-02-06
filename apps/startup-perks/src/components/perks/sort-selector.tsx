"use client";

import { Button } from "@/components/ui/button";

type SortOption = "name" | "company" | "value";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
	{ value: "name", label: "Name" },
	{ value: "company", label: "Company" },
	{ value: "value", label: "Credit Value" },
];

interface SortSelectorProps {
	selected: SortOption;
	onChange: (sort: SortOption) => void;
}

export function SortSelector({ selected, onChange }: SortSelectorProps) {
	return (
		<div className="space-y-3">
			<h3 className="text-sm font-medium">Sort By</h3>
			<div className="flex flex-wrap gap-2">
				{SORT_OPTIONS.map((option) => (
					<Button
						key={option.value}
						variant={selected === option.value ? "default" : "outline"}
						size="sm"
						onClick={() => onChange(option.value)}
						className="text-xs"
					>
						{option.label}
					</Button>
				))}
			</div>
		</div>
	);
}
