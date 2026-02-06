import { getStats, getPopularPerks, getAllPerks } from "@/data/queries";
import { generateWebSiteSchema, generateOrganizationSchema } from "@/lib/seo";
import { PageLayout } from "@/components/layout/page-layout";
import { GlobalSearchInput } from "@/components/global-search-input";
import { PerkListWithInfiniteScroll } from "@/components/perk-list-with-scroll";
import { LandingFilters } from "@/components/landing-filters";

export default function HomePage() {
	const stats = getStats();
	const featuredPerks = getPopularPerks();
	const allPerks = getAllPerks();

	return (
		<PageLayout>
			{/* JSON-LD Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(generateWebSiteSchema()),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(generateOrganizationSchema()),
				}}
			/>

			<div className="flex justify-center min-h-screen w-full md:px-0 px-6 mt-[10%]">
				<div className="w-full max-w-6xl">
					{/* Hero Section */}
					<div className="text-center mb-14">
						<h1 className="text-2xl font-medium tracking-tight mb-2">
							Discover $1M+ in Free Credits for Your Startup
						</h1>
						<p className="text-md text-[#878787] max-w-2xl mx-auto mb-10">
							Find cloud credits, AI API access, and developer tools from the
							world's leading technology companies.
						</p>

						{/* Search Input */}
						<GlobalSearchInput />
					</div>

					

					{/* Filters */}
					<LandingFilters />

					{/* Perks with Infinite Scroll */}
					<PerkListWithInfiniteScroll
						perks={allPerks}
						featuredPerks={featuredPerks}
					/>
				</div>
			</div>
		</PageLayout>
	);
}
