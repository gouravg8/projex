import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { List } from "antd";
import { BsCheckCircleFill } from "react-icons/bs";

const loadingSteps = [
	"Gathering User Requirements",
	"Analyzing User Preferences",
	"Structuring the Blueprint",
	"Refining & Optimizing",
	"Project Ready",
];

const ProjectLoading = ({
	loadingDuration = 5000,
}: { loadingDuration?: number }) => {
	const [currentStep, setCurrentStep] = useState(0);
	const stepDuration = loadingDuration / (loadingSteps.length - 1);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentStep((prev) =>
				prev < loadingSteps.length - 1 ? prev + 1 : prev,
			);
		}, stepDuration);

		return () => clearInterval(interval);
	}, [stepDuration]);

	const slideVariants = {
		hidden: { x: -100, opacity: 0 },
		visible: (index: number) => ({
			x: 0,
			opacity: 1,
			transition: {
				delay: index * 0.3,
				duration: 0.5,
				type: "spring",
				stiffness: 100,
			},
		}),
	};

	return (
		<List
			className="flex items-center justify-center align-middle min-h-[60vh] w-full"
			itemLayout="horizontal"
			dataSource={loadingSteps}
			renderItem={(step, index) => (
				<motion.div
					custom={index}
					initial="hidden"
					animate="visible"
					variants={slideVariants}
				>
					<List.Item>
						{index <= currentStep && (
							<div className="flex items-center w-full space-x-4 text-green-600 dark:text-green-500">
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 0.3 }}
								>
									<BsCheckCircleFill
										className="text-lg "
										style={{ opacity: index <= currentStep ? 1 : 0 }}
									/>
								</motion.div>
								<motion.span className="text-base font-medium">
									{step}
								</motion.span>
							</div>
						)}
					</List.Item>
				</motion.div>
			)}
		/>
	);
};

export default ProjectLoading;
