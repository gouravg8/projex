import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				// backgroundDark: "var(--background-dark)",
				backgroundDark: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--primary)",
				buttonPrimary: "var(--button-primary)",
				buttonText: "var(--button-text)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
				warning: "var(--warning)",
			},
		},
	},
	plugins: [],
};
export default config;
