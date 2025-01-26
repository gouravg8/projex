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
				className="bg-slate-900 !hover:bg-red-900 text-white border-none"
				onClick={toggleTheme}
				icon={theme === "light" ? <BiSun /> : <BiMoon />}
			/>
		</div>
	);
};

export default ThemeToggle;
