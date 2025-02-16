"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
const loading = () => {
	const { theme } = useTheme();
	return (
		<div className="bg-background h-[90vh] flex justify-center items-center ">
			{/* <p className="animate-bounce text-foreground">{PROJECT_NAME}</p> */}
			<Image
				height={100}
				width={100}
				src={theme === "light" ? "/projex.png" : "/projex_white.png"}
				alt="loading"
				className="animate-spin"
			/>
		</div>
	);
};

export default loading;
