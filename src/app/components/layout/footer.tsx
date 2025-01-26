"use client";
import React from "react";

const footer = () => {
	return (
		<footer className="py-6 text-sm text-center text-foreground dark:text-foreground bg-primary dark:bg-backgroundDark">
			© {new Date().getFullYear()} Creovate. All rights reserved.
		</footer>
	);
};

export default footer;
