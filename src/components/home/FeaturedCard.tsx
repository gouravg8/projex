import React from "react";

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}
export default function FeatureCard({
	icon,
	title,
	description,
}: FeatureCardProps) {
	return (
		<div className="flex flex-col items-center p-6 text-center rounded-lg bg-foreground shadow-[0_0_30px_-12px] shadow-foreground backdrop-blur-2xl cursor-pointer hover:-translate-y-4 duration-300">
			<div>
				{React.cloneElement(icon as React.ReactElement, {
					className: "size-14 mb-2 text-background",
				})}
			</div>
			<h3 className="mb-2 text-xl font-semibold text-background">{title}</h3>
			<p className="text-muted-foreground text-background">{description}</p>
		</div>
	);
}
