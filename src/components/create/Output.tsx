import React from "react";
import ReactMarkdown from "react-markdown";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Output = ({ data }: any) => {
	return (
		// <div className="w-[90vw] md:w-[70vw] mx-auto border border-dashed border-gray-400 max-h-[60dvh] rounded-md p-8 overflow-y-scroll">
		<div className="w-[90vw] md:w-[70vw] mx-auto p-8">
			<ReactMarkdown
				components={{
					h1: ({ children }) => (
						<h1 className="text-3xl font-bold mb-6 text-foreground">
							{children}
						</h1>
					),
					h2: ({ children }) => (
						<h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">
							{children}
						</h2>
					),
					h3: ({ children }) => (
						<h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground">
							{children}
						</h3>
					),
					p: ({ children }) => (
						<p className="text-base text-muted-foreground mb-4">{children}</p>
					),
					strong: ({ children }) => (
						<span className="font-semibold text-foreground">{children}</span>
					),
					ul: ({ children }) => (
						<ul className="list-disc pl-6 space-y-2 mt-2 mb-6">{children}</ul>
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
