"use client";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PROJECT_NAME } from "@/constants";
import { SignIn } from "../auth/signin-button";
import { useSession } from "next-auth/react";
import { SignOut } from "../auth/signout-button";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();
	const { data: session } = useSession();

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
					{/* <Link
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
					</Link> */}
					{/* <Link
						href={"/create"}
						className="px-2 py-2 font-semibold border-none rounded-md text-buttonText bg-buttonPrimary"
					>
						Get Started
					</Link> */}
					{/* <Button onClick={() => signIn("google", { redirectTo: "/create" })}>
						SignIn
					</Button> */}
					{session?.user?.name ? <SignOut /> : <SignIn>Sign In</SignIn>}
				</div>
			</div>
		</nav>
	);
}
