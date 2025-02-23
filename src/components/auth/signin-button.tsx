"use client";
import { Button } from "antd";
import { signIn } from "next-auth/react";

export function SignIn() {
	return (
		<Button
			type="primary"
			onClick={() => signIn("google", { redirectTo: "/create" })}
			className="px-2 py-2 font-semibold border-none rounded-md text-buttonText bg-buttonPrimary"
		>
			Get Started
		</Button>
	);
}
