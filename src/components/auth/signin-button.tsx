"use client";
import { Button } from "antd";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SignIn({
	children,
	props,
	className,
}: {
	children?: React.ReactNode;
	props?: React.ComponentProps<typeof Button>;
	className?: string;
}) {
	const { data: session } = useSession();
	const router = useRouter();

	return (
		<Button
			{...props}
			type="primary"
			onClick={() =>
				session?.user?.email
					? router.push("/create")
					: signIn("google", { redirectTo: "/create" })
			}
			className={`px-2 py-2 font-semibold border-none rounded-md text-buttonText bg-buttonPrimary ${className}`}
		>
			{children}
		</Button>
	);
}
