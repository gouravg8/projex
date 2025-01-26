"use client";
import React from "react";

const footer = () => {
	return (
		<footer className=" py-6 text-center text-sm text-muted-foreground dark:bg-backgroundDark">
			© {new Date().getFullYear()} Creovate. All rights reserved.
		</footer>
	);
};

export default footer;
