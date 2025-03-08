import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import QueryProvider from "./QueryProvider";
import { ConfigProvider, type ThemeConfig } from "antd";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Projex",
	description:
		"We help you to find best project idea that you can enjoy and shape your skills with real project",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const customTheme: ThemeConfig = {
		token: {
			colorText: "var(--foreground)",
		},
		components: {
			Select: {
				colorTextPlaceholder: "#A9A4A4",
				colorBgContainer: "#var(--background)",
				colorBorder: "var(--accent)",
				optionSelectedBg: "var(--backgroundDark)",
				boxShadow: "0 0 0 1px var(--accent)",
			},
		},
	};
	return (
		<SessionProvider>
			<ThemeProvider>
				<html lang="en">
					<body
						className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
					>
						<Navbar />
						<ConfigProvider theme={customTheme}>
							<QueryProvider>{children}</QueryProvider>
						</ConfigProvider>
						<Footer />
					</body>
				</html>
			</ThemeProvider>
		</SessionProvider>
	);
}
