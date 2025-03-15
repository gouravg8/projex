"use client";
import { PROJECT_NAME } from "@/constants";
import React from "react";

const footer = () => {
	return (
		<footer className="py-6 text-sm text-center text-foreground dark:text-foreground bg-background dark:bg-background">
			© {new Date().getFullYear()} {PROJECT_NAME}. All rights reserved.
		</footer>
	);
};

export default footer;
