import { Header } from "./header";
import { Footer } from "./footer";

interface PageLayoutProps {
	children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
	return (
		<>
			<Header />
			<main className="pt-12">{children}</main>
			<Footer />
		</>
	);
}
