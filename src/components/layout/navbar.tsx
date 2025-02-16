"use client";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import { useTheme } from "../theme-provider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PROJECT_NAME } from "@/constants";

export default function Navbar() {
	const { theme } = useTheme();
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 80);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<nav
			className={`flex justify-center sticky top-0 z-50 text-foreground dark:text-foreground
        ${
					isScrolled && pathname === "/"
						? "backdrop-blur-md bg-background/60 dark:bg-backgroundDark/60"
						: "bg-background dark:bg-backgroundDark"
				}`}
		>
			<div className="w-full md:w-[80vw] flex items-center justify-between py-4 px-6">
				<Link href="/" className="text-2xl font-bold">
					{PROJECT_NAME}
				</Link>
				<div className="flex items-center space-x-4">
					<ThemeToggle />
					<Link
						href="/about"
						className="hidden text-sm font-medium hover:underline md:block"
					>
						About
					</Link>

					<Link
						href="/features"
						className="hidden text-sm font-medium hover:underline md:block"
					>
						Features
					</Link>
					<Link
						href={"/create"}
						className="px-2 py-2 font-semibold border-none rounded-md text-buttonText bg-buttonPrimary"
					>
						Get Started
					</Link>
				</div>
			</div>
		</nav>
	);
}
