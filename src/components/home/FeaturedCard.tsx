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
		<div className="flex flex-col items-center p-6 text-center rounded-lg shadow-sm bg-foreground">
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
