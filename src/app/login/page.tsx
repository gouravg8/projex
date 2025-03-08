"use client";
import { signIn } from "next-auth/react";
import { GoogleCircleFilled } from "@ant-design/icons";
import { Button, Form } from "antd";

export default function LoginPage() {
	const login = async () => {
		await signIn("google", { callbackUrl: "/create" });
	};

	return (
		<div className="h-[85vh] flex items-center justify-center">
			<div className="bg-foreground p-8 rounded-lg shadow-md w-96">
				<h1 className="text-2xl font-bold text-center mb-6 text-background">
					Welcome to Projex
				</h1>
				<Button
					onClick={login}
					icon={<GoogleCircleFilled />}
					size="large"
					className="w-full bg-background text-foreground rounded-lg dark:hover:!bg-black/80 hover:!bg-zinc-300 border-none"
				>
					Continue with Google
				</Button>
			</div>
		</div>
	);
}
