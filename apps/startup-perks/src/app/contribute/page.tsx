import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	ExternalLink,
	GitPullRequest,
	FileText,
	CheckCircle,
} from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";

export const metadata: Metadata = {
	title: "Contribute",
	description:
		"Help grow the Startup Perks Directory by contributing new perks and programs. Learn how to submit perks via GitHub pull requests.",
	openGraph: {
		title: "Contribute | Startup Perks Directory",
		description:
			"Help grow the Startup Perks Directory by contributing new perks and programs.",
	},
};

export default function ContributePage() {
	return (
		<PageLayout>
			<div className="container mx-auto px-4 md:px-6 py-8 max-w-6xl">
				{/* Page Header */}
				<div className="mb-8 text-center">
					<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
						Contribute to Startup Perks Directory
					</h1>
					<p className="text-sm text-[#878787]">
						Help us maintain the most comprehensive directory of startup perks
						and credits
					</p>
				</div>

				{/* Why Contribute Section */}
				<Card className="mb-8">
					<CardHeader>
						<CardTitle className="text-base">Why Contribute?</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-sm text-[#878787]">
							The Startup Perks Directory is a community-driven resource. By
							contributing, you help thousands of startup founders discover
							valuable programs and credits that can help them build and grow
							their businesses.
						</p>
						<ul className="space-y-2 text-xs text-[#878787]">
							<li className="flex items-start gap-2">
								<CheckCircle className="h-3 w-3 shrink-0 text-primary mt-0.5" />
								<span>Help fellow founders discover valuable resources</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle className="h-3 w-3 shrink-0 text-primary mt-0.5" />
								<span>Keep the directory up-to-date and comprehensive</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle className="h-3 w-3 shrink-0 text-primary mt-0.5" />
								<span>Get credited as a contributor in our README</span>
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle className="h-3 w-3 shrink-0 text-primary mt-0.5" />
								<span>Build your open source contribution portfolio</span>
							</li>
						</ul>
					</CardContent>
				</Card>

					{/* How to Contribute */}
					<div className="mb-8 space-y-6">
						<h2 className="text-2xl font-bold">How to Contribute</h2>

						<Card>
							<CardHeader className="flex flex-row items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
									1
								</div>
								<CardTitle className="text-base">Fork the Repository</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3">
								<p className="text-sm text-[#878787]">
									Start by forking the GitHub repository to your own account.
								</p>
								<Button asChild variant="outline" size="sm" className="text-xs">
									<a
										href="https://github.com/yourusername/startup-perks"
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="h-3 w-3" />
										Fork on GitHub
									</a>
								</Button>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="flex flex-row items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
									2
								</div>
								<CardTitle className="text-base">Add Your Perk</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3">
								<p className="text-sm text-[#878787]">
									Navigate to{" "}
									<code className="rounded bg-muted px-1 py-0.5 text-xs">
										packages/data/src/perks/startup-perks.ts
									</code>{" "}
									and add your perk to the array. Follow the existing format.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="flex flex-row items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
									3
								</div>
								<CardTitle className="text-base">
									Submit a Pull Request
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3">
								<p className="text-sm text-[#878787]">
									Create a pull request with your changes. Include:
								</p>
								<ul className="space-y-2 text-xs text-[#878787]">
									<li className="flex items-start gap-2">
										<CheckCircle className="h-3 w-3 shrink-0 text-primary mt-0.5" />
										<span>Clear commit message describing the perk added</span>
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle className="h-3 w-3 shrink-0 text-primary mt-0.5" />
										<span>
											Verification that all required fields are filled
										</span>
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle className="h-3 w-3 shrink-0 text-primary mt-0.5" />
										<span>Check that URLs are correct and active</span>
									</li>
									<li className="flex items-start gap-2">
										<CheckCircle className="h-3 w-3 shrink-0 text-primary mt-0.5" />
										<span>Run lint check before submitting</span>
									</li>
								</ul>
								<Button asChild variant="outline" size="sm" className="text-xs">
									<a
										href="https://github.com/yourusername/startup-perks/compare"
										target="_blank"
										rel="noopener noreferrer"
									>
										<GitPullRequest className="h-3 w-3" />
										Create Pull Request
									</a>
								</Button>
							</CardContent>
						</Card>
					</div>

				{/* Guidelines */}
				<Card className="mb-8">
					<CardHeader>
						<CardTitle className="text-base">Contribution Guidelines</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h3 className="mb-2 text-sm font-medium">Required Information</h3>
							<ul className="space-y-1 text-xs text-[#878787]">
								<li>• Company and program name</li>
								<li>• Category (cloud, AI, database, etc.)</li>
								<li>• Credit value or discount amount</li>
								<li>• Clear description and eligibility requirements</li>
								<li>• Working application URL</li>
								<li>• Official source/documentation URL</li>
							</ul>
						</div>

						<div>
							<h3 className="mb-2 text-sm font-medium">Quality Standards</h3>
							<ul className="space-y-1 text-xs text-[#878787]">
								<li>• Verify all URLs are accessible and correct</li>
								<li>• Ensure eligibility requirements are accurate</li>
								<li>• Use consistent formatting with existing perks</li>
								<li>• Check for duplicates before adding</li>
								<li>• Run linter before submitting (npm run lint)</li>
							</ul>
						</div>
					</CardContent>
				</Card>

				{/* Additional Resources */}
				<Card>
					<CardHeader>
						<CardTitle className="text-base">Need Help?</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<p className="text-sm text-[#878787]">
							If you're new to contributing or have questions, check out these
							resources:
						</p>
						<div className="flex flex-wrap gap-3">
							<Button asChild variant="outline" size="sm" className="text-xs">
								<a
									href="https://github.com/yourusername/startup-perks/blob/main/CONTRIBUTING.md"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FileText className="h-3 w-3" />
									Contributing Guide
								</a>
							</Button>
							<Button asChild variant="outline" size="sm" className="text-xs">
								<a
									href="https://github.com/yourusername/startup-perks/issues"
									target="_blank"
									rel="noopener noreferrer"
								>
									<ExternalLink className="h-3 w-3" />
									Ask a Question
								</a>
							</Button>
						</div>
					</CardContent>
				</Card>
				</div>
			</PageLayout>
		);
	}
