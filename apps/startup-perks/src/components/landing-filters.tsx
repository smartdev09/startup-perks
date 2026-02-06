"use client";

import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";
import { CATEGORIES, CATEGORY_LABELS } from "@/lib/constants";
import { X } from "lucide-react";

export function LandingFilters() {
	const [filters, setFilters] = useQueryStates({
		categories: parseAsArrayOf(parseAsString).withDefault([]),
		featured: parseAsString.withDefault(""),
	});

	const toggleCategory = (category: string) => {
		if (category === "all") {
			setFilters({ categories: [] });
			return;
		}

		const currentCategories = filters.categories;
		if (currentCategories.includes(category)) {
			setFilters({
				categories: currentCategories.filter((c) => c !== category),
			});
		} else {
			setFilters({
				categories: [...currentCategories, category],
			});
		}
	};

	const toggleFeatured = () => {
		setFilters({
			featured: filters.featured === "true" ? "" : "true",
		});
	};

	const clearAll = () => {
		setFilters({
			categories: [],
			featured: "",
		});
	};

	const hasActiveFilters = filters.categories.length > 0 || filters.featured === "true";

	return (
		<div className="flex flex-wrap items-center gap-2 mb-6">
			<div className="flex items-center gap-2 text-xs text-[#878787]">
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="opacity-50"
				>
					<path
						d="M2 4h12M4 8h8M6 12h4"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
				<span className="font-medium">FILTERS:</span>
			</div>

			<button
				type="button"
				onClick={() => toggleCategory("all")}
				className={`px-3 py-1 text-xs font-medium border transition-colors ${
					filters.categories.length === 0
						? "bg-foreground text-background border-foreground"
						: "border-border hover:border-primary"
				}`}
			>
				ALL ({CATEGORIES.length})
			</button>

			{CATEGORIES.map((category) => (
				<button
					key={category}
					type="button"
					onClick={() => toggleCategory(category)}
					className={`px-3 py-1 text-xs font-medium border transition-colors ${
						filters.categories.includes(category)
							? "bg-foreground text-background border-foreground"
							: "border-border hover:border-primary"
					}`}
				>
					{CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS].toUpperCase()}
				</button>
			))}

			<button
				type="button"
				onClick={toggleFeatured}
				className={`px-3 py-1 text-xs font-medium border transition-colors flex items-center gap-1 ${
					filters.featured === "true"
						? "bg-foreground text-background border-foreground"
						: "border-border hover:border-primary"
				}`}
			>
				{filters.featured === "true" && (
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 2L7.5 5L11 5.5L8.5 8L9 11.5L6 9.5L3 11.5L3.5 8L1 5.5L4.5 5L6 2Z"
							fill="currentColor"
						/>
					</svg>
				)}
				FEATURED ONLY
			</button>

			{hasActiveFilters && (
				<button
					type="button"
					onClick={clearAll}
					className="px-3 py-1 text-xs font-medium text-[#878787] hover:text-foreground transition-colors flex items-center gap-1"
				>
					<X className="h-3 w-3" />
					CLEAR ALL
				</button>
			)}
		</div>
	);
}
