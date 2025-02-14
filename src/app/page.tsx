"use client";
import HowItWorks from "@/components/home/HowItWorks";
import WhyToUse from "@/components/home/WhyToUse";
import { Button } from "antd";
import React from "react";
import { GrTarget } from "react-icons/gr";
import { LuArrowRight, LuLightbulb, LuZap } from "react-icons/lu";

export default function LandingPage() {
	return (
		<div className="flex flex-col bg-background">
			{/* Hero Section */}
			<section className="py-20 text-center md:h-[70vh] flex items-center justify-center relative">
				{/* bg color and grid */}
				{/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(to_bottom,transparent,#f0f8ff)] dark:bg-[linear-gradient(to_bottom,transparent,#072333)] mask-[linear-gradient(to_bottom,transparent,black_50%)]" /> */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(to_bottom,transparent,#daddda)] dark:bg-[linear-gradient(to_bottom,transparent,#000)] mask-[linear-gradient(to_bottom,transparent,black_50%)]" />

				<div className="z-10 flex flex-col items-center px-4 mx-auto">
					<h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-8xl">
						Generate Brilliant Project <br /> Ideas to You
					</h1>
					<p className="max-w-2xl mx-auto mb-8 text-xl text-foreground">
						Projex helps you discover the perfect project based on your unique
						preferences and skills.
					</p>
					<a
						href="/"
						className="flex items-center gap-2 px-3 py-2 font-semibold duration-300 rounded-md text-[#041424] bg-buttonPrimary w-fit hover:-translate-x-1 hover:-translate-y-1"
					>
						Get Started <LuArrowRight />
					</a>
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
						with Projex.
					</p>

					<Button className="font-semibold text-black border-none bg-buttonPrimary">
						Start Generating Ideas
					</Button>
				</div>
			</section>
		</div>
	);
}
