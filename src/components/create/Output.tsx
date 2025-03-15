import type React from "react";
import ReactMarkdown from "react-markdown";

type OutputProps = {
	data: string;
};

const Output = ({ data }: OutputProps) => {
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
					a: ({ href, children }) => (
						<a
							href={href}
							className="text-blue-500 hover:text-blue-700 underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							{children}
						</a>
					),
					code({
						inline,
						className,
						children,
						...props
					}: {
						inline?: boolean;
						className?: string;
						children?: React.ReactNode;
					}) {
						const match = /language-(\w+)/.exec(className || "");
						return !inline && match ? (
							<div className="my-4 rounded-md overflow-hidden bg-muted">
								<div className="max-h-[400px] overflow-auto p-4 font-mono text-sm">
									{String(children).replace(/\n$/, "")}
								</div>
							</div>
						) : (
							<code
								className="px-1.5 py-0.5 rounded-md bg-muted text-foreground font-mono"
								{...props}
							>
								{children}
							</code>
						);
					},
				}}
			>
				{data}
			</ReactMarkdown>
		</div>
	);
};

export default Output;
