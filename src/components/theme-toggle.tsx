"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "antd";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure that the component is mounted before rendering icons
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div>
			<Button
				className="bg-transparent border-none shadow-none hover:bg-red-800 text-foreground dark:text-foreground"
				onClick={toggleTheme}
				icon={theme === "light" ? <BiSun /> : <BiMoon />}
			/>
		</div>
	);
};

export default ThemeToggle;
