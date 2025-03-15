import React, { useState, useEffect, useRef } from "react";
import { Steps, ConfigProvider } from "antd";
import { BsCheckCircleFill } from "react-icons/bs";

const loadingSteps = [
	"Gathering User Requirements",
	"Analyzing User Preferences",
	"Structuring the Blueprint",
	"Refining & Optimizing",
	"Project Ready",
];

const ProjectLoading = ({
	isLoading = true,
	loadingDuration = 15000,
}: {
	isLoading?: boolean;
	loadingDuration?: number;
}) => {
	const [currentStep, setCurrentStep] = useState(0);
	const stepDuration = loadingDuration / (loadingSteps.length - 1);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const completionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setCurrentStep((prev) => {
				// If we're at the second-to-last step and still loading, stay there
				if (prev === loadingSteps.length - 2 && isLoading) {
					return prev;
				}
				// Otherwise, proceed to the next step if not at the end
				return prev < loadingSteps.length - 1 ? prev + 1 : prev;
			});
		}, stepDuration);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
			if (completionTimeoutRef.current) {
				clearTimeout(completionTimeoutRef.current);
			}
		};
	}, [stepDuration, isLoading]);

	// When isLoading becomes false, ensure we complete all steps
	useEffect(() => {
		if (!isLoading) {
			// Clear the existing interval
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
			
			// If we haven't reached the final step yet, complete the steps with a smooth animation
			if (currentStep < loadingSteps.length - 1) {
				// Calculate remaining steps
				const remainingSteps = loadingSteps.length - 1 - currentStep;
				// Use a shorter duration for each remaining step to complete faster
				const quickStepDuration = Math.min(500, stepDuration / 2);
				
				let stepCounter = currentStep;
				
				// Set up a quick interval to complete the remaining steps
				const quickInterval = setInterval(() => {
					stepCounter++;
					setCurrentStep(stepCounter);
					
					if (stepCounter >= loadingSteps.length - 1) {
						clearInterval(quickInterval);
					}
				}, quickStepDuration);
				
				// Store the interval for cleanup
				intervalRef.current = quickInterval;
				
				// Set a timeout to ensure we reach the final step even if something goes wrong
				completionTimeoutRef.current = setTimeout(() => {
					setCurrentStep(loadingSteps.length - 1);
					if (intervalRef.current) {
						clearInterval(intervalRef.current);
						intervalRef.current = null;
					}
				}, quickStepDuration * remainingSteps + 100);
			}
		}
	}, [isLoading, currentStep, stepDuration]);

	const customTheme = {
		components: {
			Steps: {
				colorPrimary: "var(--primary)",
				colorText: "var(--foreground)",
				colorTextDescription: "var(--muted-foreground)",
				colorTextQuaternary: "var(--muted-foreground)",
				controlItemBgActive: "var(--primary)",
			},
		},
	};
	const items = loadingSteps.map((step, index) => ({
		title: step,
		status:
			index < currentStep
				? "finish"
				: index === currentStep
					? "process"
					: ("wait" as "finish" | "process" | "wait" | "error" | undefined),
		icon:
			index <= currentStep ? (
				<BsCheckCircleFill size={30} className="text-buttonPrimary" />
			) : undefined,
	}));

	return (
		<div className="flex items-center justify-center align-middle min-h-[60vh] w-full p-8">
			<ConfigProvider theme={customTheme}>
				<Steps
					direction="vertical"
					current={currentStep}
					items={items}
					className="w-full max-w-md"
				/>
			</ConfigProvider>
		</div>
	);
};

export default ProjectLoading;