import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { SITE_CONFIG } from "@/lib/constants";

export function Header() {
	return (
		<div className="fixed z-20 flex justify-between items-center top-0 px-6 py-2 w-full bg-background backdrop-filter backdrop-blur-sm bg-opacity-30">
			<Link href="/" className="font-medium font-mono text-sm">
				{SITE_CONFIG.shortName.toLowerCase()}
			</Link>

			<nav className="flex items-center gap-5">
				<Link
					href="/perks"
					className="text-sm font-medium text-[#878787] hover:text-primary transition-colors"
				>
					Browse
				</Link>
				{/* <Link
					href="/contribute"
					className="text-sm font-medium text-[#878787] hover:text-primary transition-colors"
				>
					Contribute
				</Link> */}
				<ThemeToggle />
			</nav>
		</div>
	);
}
