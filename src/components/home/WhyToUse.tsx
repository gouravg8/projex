import React from "react";

export default function WhyToUse() {
	return (
		<section className="flex justify-center py-8 md:py-32 bg-muted dark:bg-background bg-background">
			<div className="w-full md:w-[70vw] mx-auto px-4">
				<h2 className="mb-12 text-3xl font-bold text-center text-foreground dark:text-foreground">
					Why Use Project Idea Generator?
				</h2>
				<div className="md:pl-20 grid grid-cols-1 md:grid-cols-2 gap-6 text-foreground">
					<div className="flex items-start gap-4">
						<span className="text-2xl">🚀</span>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Kickstart Your Learning
							</h3>
							<p>Apply your skills with real-world projects</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<span className="text-2xl">💡</span>
						<div>
							<h3 className="text-xl font-semibold mb-2">
								Endless Inspiration
							</h3>
							<p>Never run out of ideas for practice and portfolio building</p>
						</div>
					</div>
					<div className="flex items-start gap-4 md:my-12">
						<span className="text-2xl">📈</span>
						<div>
							<h3 className="text-xl font-semibold mb-2">Skill Progression</h3>
							<p>Start with simple projects and move to complex challenges</p>
						</div>
					</div>
					<div className="flex items-start gap-4 md:my-12">
						<span className="text-2xl">🎯</span>
						<div>
							<h3 className="text-xl font-semibold mb-2">Career Ready</h3>
							<p>Strengthen your resume with completed projects</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
