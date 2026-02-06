"use client";

import type { StartupPerk } from "@directories/data/perks";
import Link from "next/link";
import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import { Fragment, useEffect, useState } from "react";
import { PerkCard } from "./perks/perk-card";
import { Button } from "./ui/button";

const ITEMS_PER_PAGE = 12;

interface PerkListProps {
	perks: StartupPerk[];
	featuredPerks: StartupPerk[];
}

export function PerkListWithInfiniteScroll({
	perks,
	featuredPerks,
}: PerkListProps) {
	const [search] = useQueryState("q", { defaultValue: "" });
	const [categories] = useQueryState("categories", parseAsArrayOf(parseAsString).withDefault([]));
	const [featured] = useQueryState("featured", { defaultValue: "" });
	const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
	const [isMounted, setIsMounted] = useState(false);

	// Set mounted state
	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Reset visible items when filters change
	useEffect(() => {
		setVisibleItems(ITEMS_PER_PAGE);
	}, [search, categories, featured]);

	// Improved search filtering with better relevance and word matching
	const filteredPerks = perks.filter((perk) => {
		// Search filter with enhanced matching
		if (search) {
			const searchLower = search.toLowerCase().trim();
			const searchTerms = searchLower.split(/\s+/); // Split by whitespace
			
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
			const matchesAllTerms = searchTerms.every(term => 
				searchableText.includes(term)
			);
			
			if (!matchesAllTerms) return false;
		}

		// Category filter
		if (categories.length > 0 && !categories.includes(perk.category)) {
			return false;
		}

		// Featured filter
		if (featured === "true" && !perk.featured) {
			return false;
		}

		return true;
	});

	// Split into featured and remaining based on whether we're filtering or not
	const featuredIds = new Set(featuredPerks.map((p) => p.id));
	
	// When searching or filtering, show ALL matching perks together (don't separate featured)
	const isFiltering = search || categories.length > 0 || featured === "true";
	
	const displayFeatured = !isFiltering ? featuredPerks : [];
	const remainingPerks = isFiltering 
		? filteredPerks  // Show all filtered perks when searching/filtering
		: filteredPerks.filter((p) => !featuredIds.has(p.id)); // Otherwise exclude featured from this section

	// Handle infinite scroll
	const handleScroll = () => {
		const bottom =
			Math.ceil(window.innerHeight + window.scrollY) >=
			document.documentElement.scrollHeight - 100;

		if (bottom && visibleItems < remainingPerks.length) {
			setVisibleItems((prev) =>
				Math.min(prev + ITEMS_PER_PAGE, remainingPerks.length),
			);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [visibleItems, remainingPerks.length]);

	if (filteredPerks.length === 0) {
		return (
			<div className="flex justify-center items-center h-[400px]">
				<div className="flex-col gap-4 flex items-center">
					<p className="text-[#878787] text-sm">No perks found</p>
					<Button
						variant="outline"
						className="mt-2 border-border rounded-full"
						onClick={() => (window.location.href = "/")}
					>
						Clear filters
					</Button>
				</div>
			</div>
		);
	}

	const showFeaturedSection = !isFiltering && displayFeatured.length > 0;

	return (
		<>
			{/* Featured Perks Section */}
			{showFeaturedSection && (
				<div className="mb-16">
					<div className="flex justify-between items-center mb-4">
						<h3 className="text-base font-regular">Featured perks</h3>
						<Link
							href="/perks"
							className="text-sm text-[#878787] hover:text-primary transition-colors"
						>
							View all →
						</Link>
					</div>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{displayFeatured.slice(0, 6).map((perk) => (
							<PerkCard key={perk.id} perk={perk} />
						))}
					</div>
				</div>
			)}

			{/* All Perks Section */}
			{remainingPerks.length > 0 && (
				<div>
					<div className="flex justify-between items-center mb-4">
						<h3 className="text-base font-regular">
							{isFiltering ? "Results" : "All perks"}
						</h3>
						<span className="text-sm text-[#878787]">
							{isFiltering ? filteredPerks.length : remainingPerks.length} perk{(isFiltering ? filteredPerks.length : remainingPerks.length) !== 1 ? "s" : ""}
						</span>
					</div>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{remainingPerks.slice(0, visibleItems).map((perk) => (
							<PerkCard key={perk.id} perk={perk} />
						))}
					</div>
				</div>
			)}

			{/* Loading indicator */}
			{visibleItems < remainingPerks.length && (
				<div className="flex justify-center mt-8">
					<button
						type="button"
						onClick={() =>
							setVisibleItems((prev) =>
								Math.min(prev + ITEMS_PER_PAGE, remainingPerks.length),
							)
						}
						className="px-4 py-2 text-sm text-[#878787]"
					>
						Loading more...
					</button>
				</div>
			)}
		</>
	);
}
