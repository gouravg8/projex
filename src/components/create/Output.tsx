import React from "react";
import ReactMarkdown from "react-markdown";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Output = ({ data }: any) => {
	return (
		<div className="w-[90vw] md:w-[70vw] mx-auto p-8">
			<ReactMarkdown
				components={{
					h1: ({ children }) => (
						<h1 className="mb-6 text-3xl font-bold text-foreground">
							{children}
						</h1>
					),
					h2: ({ children }) => (
						<h2 className="mt-8 mb-4 text-3xl font-bold text-foreground">
							{children}
						</h2>
					),
					h3: ({ children }) => (
						<h3 className="mt-6 mb-3 text-2xl font-semibold text-foreground">
							{children}
						</h3>
					),
					p: ({ children }) => (
						<p className="mb-4 text-base text-muted-foreground">{children}</p>
					),
					strong: ({ children }) => (
						<span className="font-semibold text-foreground">{children}</span>
					),
					ul: ({ children }) => (
						<ul className="pl-6 mt-2 mb-6 space-y-2 list-disc">{children}</ul>
					),
					li: ({ children }) => (
						<li className="text-muted-foreground">{children}</li>
					),
				}}
			>
				{data}
			</ReactMarkdown>
		</div>
	);
};

export default Output;
