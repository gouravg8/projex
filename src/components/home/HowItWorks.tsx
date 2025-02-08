import React from "react";
import FeatureCard from "./FeaturedCard";
import { GrTarget } from "react-icons/gr";
import { LuZap, LuLightbulb } from "react-icons/lu";

const HowItWorks = () => {
	return (
		<section className="flex justify-center py-8 md:py-12 bg-muted dark:bg-background bg-background ">
			<div className="w-full md:w-[70vw] mx-auto px-4">
				<h2 className="mb-12 text-3xl font-bold text-center text-foreground dark:text-foreground">
					How It Works
				</h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-white">
					<FeatureCard
						icon={<GrTarget />}
						title="Define Your Interests"
						description="Tell us about your passions, skills, and goals."
					/>
					<FeatureCard
						icon={<LuZap />}
						title="AI-Powered Suggestions"
						description="Our algorithm generates tailored project ideas."
					/>
					<FeatureCard
						icon={<LuLightbulb />}
						title="Bring Ideas to Life"
						description="Get detailed guides and resources to start your project."
					/>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
