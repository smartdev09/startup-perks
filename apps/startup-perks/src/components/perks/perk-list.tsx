"use client";

import type { StartupPerk } from "@directories/data/perks";
import { PerkCard } from "./perk-card";
import { Button } from "@/components/ui/button";

interface PerkListProps {
	perks: StartupPerk[];
	emptyMessage?: string;
}

export function PerkList({
	perks,
	emptyMessage = "No perks found matching your criteria.",
}: PerkListProps) {
	if (perks.length === 0) {
		return (
			<div className="flex min-h-[400px] items-center justify-center">
				<div className="flex-col gap-4 flex items-center">
					<p className="text-[#878787] text-sm">{emptyMessage}</p>
					<Button
						variant="outline"
						className="mt-2 border-border rounded-full"
						onClick={() => (window.location.href = "/perks")}
					>
						Clear filters
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{perks.map((perk) => (
				<PerkCard key={perk.id} perk={perk} />
			))}
		</div>
	);
}
