import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPerks, getPerk } from "@/data/queries";
import { generatePerkSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CATEGORY_LABELS } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";

interface PerkPageProps {
	params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
	const perks = getAllPerks();
	return perks.map((perk) => ({
		id: perk.id,
	}));
}

export async function generateMetadata({
	params,
}: PerkPageProps): Promise<Metadata> {
	const { id } = await params;
	const perk = getPerk(id);

	if (!perk) {
		return {
			title: "Perk Not Found",
		};
	}

	return {
		title: `${perk.name} - ${perk.company}`,
		description: perk.description,
		openGraph: {
			title: `${perk.name} | Startup Perks Directory`,
			description: perk.description,
		},
	};
}

export default async function PerkPage({ params }: PerkPageProps) {
	const { id } = await params;
	const perk = getPerk(id);

	if (!perk) {
		notFound();
	}

	const breadcrumbs = [
		{ name: "Home", url: "/" },
		{ name: "Perks", url: "/perks" },
		{ name: perk.name, url: `/perks/${perk.id}` },
	];

	return (
		<PageLayout>
			{/* JSON-LD Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(generatePerkSchema(perk)),
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
					<span className="text-foreground">{perk.name}</span>
				</nav>

				{/* Back Button */}
				<Button variant="ghost" size="sm" asChild className="mb-6 text-xs">
					<Link href="/perks">
						<ArrowLeft className="h-3 w-3" />
						Back to all perks
					</Link>
				</Button>

				<div className="grid gap-8 lg:grid-cols-3">
					{/* Main Content */}
					<div className="lg:col-span-2 space-y-6">
						<div>
							<div className="mb-2 flex items-center gap-2">
								<Badge variant="secondary" className="text-[10px]">
									{CATEGORY_LABELS[perk.category as keyof typeof CATEGORY_LABELS] || perk.category}
								</Badge>
								{perk.featured && (
									<Badge variant="default" className="text-[10px]">
										Featured
									</Badge>
								)}
							</div>
							<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
								{perk.name}
							</h1>
							<p className="text-lg text-muted-foreground">{perk.company}</p>
						</div>

						<Card className="bg-card border-border">
							<CardHeader>
								<CardTitle className="text-base">Description</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground">{perk.description}</p>
							</CardContent>
						</Card>

						<Card className="bg-card border-border">
							<CardHeader>
								<CardTitle className="text-base">Eligibility</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground">{perk.eligibility}</p>
							</CardContent>
						</Card>
					</div>

					{/* Sidebar */}
					<aside className="space-y-6">
						<Card className="bg-card border-border">
							<CardHeader>
								<CardTitle className="text-base">Credits & Benefits</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm font-medium">{perk.credits}</p>
							</CardContent>
						</Card>

						<Card className="bg-card border-border">
							<CardHeader>
								<CardTitle className="text-base">Apply Now</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-xs text-muted-foreground">
									Click below to apply for this perk directly on the provider's
									website.
								</p>
								<Button
									variant="secondary"
									size="sm"
									className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full font-mono text-xs h-8"
									asChild
								>
									<a
										href={perk.applyUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-1"
									>
										Apply on {perk.company}
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
							</CardContent>
						</Card>
					</aside>
				</div>
			</div>
		</PageLayout>
	);
}

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours
