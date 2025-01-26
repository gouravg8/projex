"use client";
import { Button } from "antd";
import { GrTarget } from "react-icons/gr";
import { LuArrowRight, LuLightbulb, LuZap } from "react-icons/lu";

export default function LandingPage() {
	return (
		<div className="flex flex-col dark:bg-background">
			{/* Hero Section */}
			<section className="py-20 text-center md:h-[70vh] flex items-center justify-center relative">
				{/* bg color and grid */}
				<div className="absolute -top-1 inset-0 h-full w-full bg-background dark:bg-background bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#5555552e_1px,transparent_1px),linear-gradient(to_bottom,#5555552e_1px,transparent_1px)] bg-[size:40px_40px]" />

				{/* belowed gradient fade */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(to_bottom,transparent,#f0f8ff)] dark:bg-[linear-gradient(to_bottom,transparent,#072333)] mask-[linear-gradient(to_bottom,transparent,black_50%)]" />

				<div className="z-10 flex flex-col items-center px-4 mx-auto">
					<h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-8xl dark:text-white">
						Generate Brilliant Project <br /> Ideas to You
					</h1>
					<p className="max-w-2xl mx-auto mb-8 text-xl text-gray-700 dark:text-white dark:text-muted-foreground">
						Creovate helps you discover the perfect project based on your unique
						preferences and skills.
					</p>
					<a
						href="/"
						className="flex items-center gap-2 px-3 py-2 font-semibold duration-300 rounded-md text-foreground dark:text-secondary bg-buttonPrimary w-fit hover:-translate-x-1 hover:-translate-y-1"
					>
						Get Started <LuArrowRight />
					</a>
					{/* </div> */}
				</div>
			</section>

			{/* Features Section */}
			<section className="flex justify-center py-8 md:py-24 bg-muted dark:bg-background bg-background ">
				<div className="w-full md:w-[70vw] mx-auto px-4">
					<h2 className="mb-12 text-3xl font-bold text-center text-foreground dark:text-foreground">
						How It Works
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-foreground dark:text-foreground">
						<FeatureCard
							icon={
								<GrTarget className="w-10 h-10 text-foreground dark:text-foreground" />
							}
							title="Define Your Interests"
							description="Tell us about your passions, skills, and goals."
						/>
						<FeatureCard
							icon={
								<LuZap className="w-10 h-10 text-foreground dark:text-foreground" />
							}
							title="AI-Powered Suggestions"
							description="Our algorithm generates tailored project ideas."
						/>
						<FeatureCard
							icon={
								<LuLightbulb className="w-10 h-10 text-foreground dark:text-foreground" />
							}
							title="Bring Ideas to Life"
							description="Get detailed guides and resources to start your project."
						/>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section
				id="get-started"
				className="py-20 bg-background dark:bg-background"
			>
				<div className="container px-4 mx-auto text-center">
					<h2 className="mb-6 text-3xl font-bold dark:text-white">
						Ready to Find Your Next Big Idea?
					</h2>
					<p className="max-w-2xl mx-auto mb-8 text-xl text-foreground dark:text-foreground">
						Join thousands of creators who have discovered their perfect project
						with Creovate.
					</p>

					<Button className="font-semibold border-none bg-buttonPrimary">
						Start Generating Ideas
					</Button>
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
		<div className="flex flex-col items-center p-6 text-center rounded-lg shadow-sm bg-secondary dark:bg-secondary">
			<div className="mb-4 text-primary">{icon}</div>
			<h3 className="mb-2 text-xl font-semibold dark:text-white">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
}
