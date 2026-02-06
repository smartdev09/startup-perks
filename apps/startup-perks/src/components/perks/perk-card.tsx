"use client";

import type { StartupPerk } from "@directories/data/perks";
import Link from "next/link";
import { CATEGORY_LABELS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface PerkCardProps {
	perk: StartupPerk;
}

export function PerkCard({ perk }: PerkCardProps) {
	return (
		<div className="rounded-lg border border-border p-5 transition-colors hover:border-primary bg-card">
			<div className="flex items-start justify-between mb-3">
				<div className="text-xs font-medium text-muted-foreground font-mono">
					{perk.company}
				</div>
				<div className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium">
					{CATEGORY_LABELS[perk.category as keyof typeof CATEGORY_LABELS] ||
						perk.category}
				</div>
			</div>
			<Link href={`/perks/${perk.id}`}>
				<h3 className="text-sm font-medium mb-2 hover:text-primary transition-colors">
					{perk.name}
				</h3>
			</Link>
			<p className="text-xs text-muted-foreground mb-3 line-clamp-2">
				{perk.description}
			</p>
			<div className="flex items-center justify-between">
				<div className="text-xs font-medium">{perk.credits}</div>
				<Button
					variant="secondary"
					size="sm"
					className="w-fit bg-foreground text-background hover:bg-foreground/90 rounded-full font-mono text-xs h-7 px-3"
					asChild
				>
					<a
						href={perk.applyUrl}
						target="_blank"
						rel="noopener noreferrer"
						onClick={(e) => e.stopPropagation()}
						className="flex items-center gap-1"
					>
						Apply
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</Button>
			</div>
		</div>
	);
}
