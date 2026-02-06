import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
	getAllPerks,
	getPerksByCategoryName,
	getCategoriesWithCounts,
} from "@/data/queries";
import { generateItemListSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { PerkList } from "@/components/perks/perk-list";
import { CATEGORY_LABELS, CATEGORIES } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/page-layout";

interface CategoryPageProps {
	params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
	return CATEGORIES.map((category) => ({
		category: category,
	}));
}

export async function generateMetadata({
	params,
}: CategoryPageProps): Promise<Metadata> {
	const { category } = await params;

	if (!CATEGORIES.includes(category as any)) {
		return {
			title: "Category Not Found",
		};
	}

	const categoryLabel =
		CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS];

	return {
		title: `${categoryLabel} Perks`,
		description: `Browse ${categoryLabel.toLowerCase()} startup perks and credits. Find the best programs and benefits for your startup.`,
		openGraph: {
			title: `${categoryLabel} Perks | Startup Perks Directory`,
			description: `Browse ${categoryLabel.toLowerCase()} startup perks and credits.`,
		},
	};
}

export default async function CategoryPage({ params }: CategoryPageProps) {
	const { category } = await params;

	if (!CATEGORIES.includes(category as any)) {
		notFound();
	}

	const perks = getPerksByCategoryName(category);
	const categoryLabel =
		CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS];

	const breadcrumbs = [
		{ name: "Home", url: "/" },
		{ name: "Perks", url: "/perks" },
		{ name: categoryLabel, url: `/perks/category/${category}` },
	];

	return (
		<PageLayout>
			{/* JSON-LD Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						generateItemListSchema(perks, `${categoryLabel} Perks`),
					),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
				}}
			/>

			<div className="container mx-auto px-4 md:px-6 py-8 max-w-6xl">
				{/* Breadcrumbs */}
				<nav className="mb-6 flex items-center gap-2 text-xs text-[#878787]">
					<Link href="/" className="hover:text-primary transition-colors">
						Home
					</Link>
					<span>/</span>
					<Link href="/perks" className="hover:text-primary transition-colors">
						Perks
					</Link>
					<span>/</span>
					<span className="text-foreground">{categoryLabel}</span>
				</nav>

				{/* Back Button */}
				<Button variant="ghost" size="sm" asChild className="mb-6 text-xs">
					<Link href="/perks">
						<ArrowLeft className="h-3 w-3" />
						Back to all perks
					</Link>
				</Button>

				{/* Page Header */}
				<div className="mb-8">
					<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
						{categoryLabel} Perks
					</h1>
					<p className="text-sm text-[#878787]">
						{perks.length} startup perk{perks.length !== 1 ? "s" : ""} in this
						category
					</p>
				</div>

						{/* Perks List */}
				<PerkList perks={perks} />
			</div>
		</PageLayout>
	);
}

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours
