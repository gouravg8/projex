"use client";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import { useTheme } from "../theme-provider";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Navbar() {
	const { theme } = useTheme();
	const router = useRouter();
	return (
		<nav
			className={
				"flex justify-center sticky top-0 backdrop-blur-md z-50 bg-backgroundDark"
			}
		>
			<div className="w-full md:w-[80vw] flex items-center justify-between py-4 px-6">
				<Link href="/" className="text-2xl font-bold">
					Creovate
				</Link>
				<div className="flex items-center space-x-4">
					<ThemeToggle />
					<Link
						href="/about"
						className="text-sm font-medium hover:underline hidden md:block"
					>
						About
					</Link>
					<Link
						href="/features"
						className="text-sm font-medium hover:underline hidden md:block"
					>
						Features
					</Link>
					<Link href={"/get-started"}>Get Started</Link>
				</div>
			</div>
		</nav>
	);
}
