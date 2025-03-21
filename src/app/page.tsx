"use client";
import { SignIn } from "@/components/auth/signin-button";
import HowItWorks from "@/components/home/HowItWorks";
import WhyToUse from "@/components/home/WhyToUse";
import { PROJECT_NAME } from "@/constants";

import React from "react";
import { LuArrowRight } from "react-icons/lu";

export default function LandingPage() {
	return (
		<div className="flex flex-col bg-background">
			{/* Hero Section */}
			<section className="py-20 text-center md:h-[70vh] flex items-center justify-center relative">
				{/* TODO: will configure it later */}
				{/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(to_bottom,transparent,#daddda)] dark:bg-[linear-gradient(to_bottom,transparent,#000)] mask-[linear-gradient(to_bottom,transparent,black_50%)]" /> */}

				<div className="z-10 flex flex-col items-center px-4 mx-auto">
					<h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-8xl">
						Generate Brilliant Project <br /> Ideas to You
					</h1>
					<p className="max-w-2xl mx-auto mb-8 text-xl text-foreground">
						{PROJECT_NAME} helps you discover the perfect project based on your
						unique preferences and skills.
					</p>
					<SignIn className="!p-5 !text-base">
						Get Started <LuArrowRight />
					</SignIn>
					{/* </div> */}
				</div>
			</section>

			{/* How It Works Section */}
			<HowItWorks />

			{/* Why Use Project Idea Generator Section */}
			<WhyToUse />

			{/* Call to Action Section */}
			<section
				id="get-started"
				className="py-20 bg-background dark:bg-background"
			>
				<div className="container px-4 mx-auto text-center">
					<h2 className="mb-6 text-3xl font-bold text-foreground">
						Ready to Find Your Next Big Idea?
					</h2>
					<p className="max-w-2xl mx-auto mb-8 text-xl text-foreground">
						Join thousands of creators who have discovered their perfect project
						with {PROJECT_NAME}.
					</p>

					<SignIn className="!p-3">Start Generating Ideas</SignIn>
				</div>
			</section>
		</div>
	);
}
