import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Startup Perks Directory",
		short_name: "Startup Perks",
		description:
			"Discover $1M+ in free cloud credits, AI API access, and developer tools for startups",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
