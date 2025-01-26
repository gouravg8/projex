"use client";
import { GrTarget } from "react-icons/gr";
import { LuArrowRight, LuLightbulb, LuZap } from "react-icons/lu";

export default function LandingPage() {
	return (
		<div className="flex flex-col dark:bg-background">
			{/* Hero Section */}
			<section className="py-20 text-center md:h-[70vh] flex items-center justify-center relative">
				{/* bg color and grid */}
				<div className="absolute -top-1 inset-0 h-full w-full bg-white dark:bg-background bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#5555552e_1px,transparent_1px),linear-gradient(to_bottom,#5555552e_1px,transparent_1px)] bg-[size:40px_40px]" />
				{/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-muted dark:bg-background" /> */}

				{/* belowed gradient fade */}
				<div className="absolute bottom-0 left-0 right-0 h-32 dark:bg-[linear-gradient(to_bottom,transparent,#05192D)] mask-[linear-gradient(to_bottom,transparent,black_50%)]" />

				<div className="flex flex-col items-center mx-auto px-4 z-10">
					<h1 className="text-4xl font-bold mb-6 sm:text-5xl md:text-8xl text-black dark:text-white">
						Generate Brilliant Project <br /> Ideas to You
					</h1>
					<p className="text-xl mb-8 text-gray-700 dark:text-white dark:text-muted-foreground max-w-2xl mx-auto">
						Creovate helps you discover the perfect project based on your unique
						preferences and skills.
					</p>
					<a
						href="/"
						className="flex gap-2 items-center bg-primary text-background font-semibold w-fit rounded-md px-3 py-2 hover:-translate-x-1 hover:-translate-y-1 duration-300"
					>
						Get Started <LuArrowRight />
					</a>
					{/* </div> */}
				</div>
			</section>

			{/* Features Section */}
			<section className="flex justify-center py-8 md:py-24 bg-muted dark:bg-background">
				<div className="w-full md:w-[70vw] mx-auto px-4">
					<h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
						How It Works
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<FeatureCard
							icon={<GrTarget className="h-10 w-10 text-foreground" />}
							title="Define Your Interests"
							description="Tell us about your passions, skills, and goals."
						/>
						<FeatureCard
							icon={<LuZap className="h-10 w-10 text-foreground" />}
							title="AI-Powered Suggestions"
							description="Our algorithm generates tailored project ideas."
						/>
						<FeatureCard
							icon={<LuLightbulb className="h-10 w-10 text-foreground" />}
							title="Bring Ideas to Life"
							description="Get detailed guides and resources to start your project."
						/>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section id="get-started" className="py-20">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-6 dark:text-white">
						Ready to Find Your Next Big Idea?
					</h2>
					<p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
						Join thousands of creators who have discovered their perfect project
						with Creovate.
					</p>
					<button type="submit">
						<a href="/signup">Start Generating Ideas</a>
					</button>
				</div>
			</section>
		</div>
	);
}

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm dark:bg-[#13283d]">
			<div className="mb-4 text-primary">{icon}</div>
			<h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
}
