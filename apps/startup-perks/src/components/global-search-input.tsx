"use client";

import { useQueryState } from "nuqs";

export function GlobalSearchInput() {
	const [search, setSearch] = useQueryState("q", { defaultValue: "" });

	const placeholder = "Search for perks, companies, or categories...";

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSubmit(e as unknown as React.FormEvent);
		}
	};

	return (
		<div className="w-full max-w-[620px] mx-auto h-[60px] border border-border">
			<form className="h-full w-full" onSubmit={handleSubmit}>
				<div className="relative h-full">
					<input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						onKeyDown={handleKeyDown}
						className="w-full text-[#585858] text-xs bg-transparent p-4 resize-none focus:outline-none pt-5"
						placeholder={search ? "" : undefined}
					/>

					{!search && (
						<div className="absolute top-4 left-2 pointer-events-none w-full">
							{placeholder.split("").map((char, index) => (
								<span
									key={`${index.toString()}-${char}`}
									style={{
										display: "inline-block",
										opacity: 0,
										color: "#585858",
										animation: `fadeIn 0.02s ease forwards ${0.2 + index * 0.002}s`,
										fontSize: "14px",
									}}
								>
									{char === " " ? "\u00A0" : char}
								</span>
							))}
						</div>
					)}
				</div>
			</form>

			<style jsx>{`
				@keyframes fadeIn {
					to {
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
}
