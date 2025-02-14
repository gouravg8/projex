"use client";
import React from "react";

const footer = () => {
	return (
		<footer className="py-6 text-sm text-center text-foreground dark:text-foreground bg-background dark:bg-background">
			© {new Date().getFullYear()} Projex. All rights reserved.
		</footer>
	);
};

export default footer;
