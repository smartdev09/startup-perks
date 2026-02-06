import type { Metadata } from "next";
import { getAllPerks } from "@/data/queries";
import { PerksClient } from "@/components/perks/perks-client";
import { generateItemListSchema } from "@/lib/seo";
import { PageLayout } from "@/components/layout/page-layout";

export const metadata: Metadata = {
	title: "All Startup Perks",
	description:
		"Browse all startup perks, credits, and programs. Find free cloud credits, AI API access, and developer tools from leading tech companies.",
	openGraph: {
		title: "All Startup Perks | Startup Perks Directory",
		description:
			"Browse all startup perks, credits, and programs. Find free cloud credits, AI API access, and developer tools.",
	},
};

export default function PerksPage() {
	const perks = getAllPerks();

	return (
		<PageLayout>
			{/* JSON-LD Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						generateItemListSchema(perks, "All Startup Perks"),
					),
				}}
			/>

			<PerksClient initialPerks={perks} />
		</PageLayout>
	);
}
