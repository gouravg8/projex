"use client";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import { useTheme } from "../theme-provider";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
	const { theme } = useTheme();
	const router = useRouter();
	const [isScrolled, setIsScrolled] = useState(false);

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
					isScrolled
						? "backdrop-blur-md bg-background/80 dark:bg-backgroundDark/80"
						: "bg-background dark:bg-backgroundDark"
				}`}
		>
			<div className="w-full md:w-[80vw] flex items-center justify-between py-4 px-6">
				<Link href="/" className="text-2xl font-bold">
					Creovate
				</Link>
				<div className="flex items-center space-x-4">
					<ThemeToggle />
					<Link
						href="/about"
						className="hidden text-sm font-medium hover:underline md:block"
					>
						About
					</Link>
					{/* https://zmp0cn8k-3000.inc1.devtunnels.ms/ */}
					<Link
						href="/features"
						className="hidden text-sm font-medium hover:underline md:block"
					>
						Features
					</Link>
					<Button className="font-semibold border-none bg-buttonPrimary">
						Get Started
					</Button>
				</div>
			</div>
		</nav>
	);
}
