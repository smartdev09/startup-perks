import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://startupperks.directory"),
	title: {
		default: "Startup Perks Directory",
		template: "%s | Startup Perks Directory",
	},
	description:
		"Discover $1M+ in free cloud credits, AI API access, and developer tools for startups. Find the best startup perks and credits from AWS, Google Cloud, OpenAI, and more.",
	keywords: [
		"startup credits",
		"startup perks",
		"free credits",
		"cloud credits",
		"AI credits",
		"startup programs",
		"developer tools",
		"AWS credits",
		"Google Cloud credits",
		"Azure credits",
	],
	authors: [{ name: "Usman Siddique" }],
	creator: "Startup Perks Directory",
	publisher: "Startup Perks Directory",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://startupperks.directory",
		title: "Startup Perks Directory",
		description:
			"Discover $1M+ in free cloud credits, AI API access, and developer tools for startups",
		siteName: "Startup Perks Directory",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Startup Perks Directory",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Startup Perks Directory",
		description:
			"Discover $1M+ in free cloud credits, AI API access, and developer tools for startups",
		images: ["/og-image.png"],
		creator: "@startupperks",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn(
				`${GeistSans.variable} ${GeistMono.variable}`,
				"whitespace-pre-line antialiased bg-background text-foreground",
			)}
		>
			<body>
				<NuqsAdapter>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</NuqsAdapter>
			</body>
		</html>
	);
}
