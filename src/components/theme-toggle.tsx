"use client";
import React from "react";
import { useTheme } from "./theme-provider";
import { Button } from "antd";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();
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
