"use client";
import { Button, Dropdown, Space, type MenuProps } from "antd";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import {
	CaretDownFilled,
	LogoutOutlined,
	PlusOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

export function SignOut() {
	const router = useRouter();
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: "Profile",
			icon: <UserOutlined />,
			onClick: () => router.push("/"),
		},
		{
			key: "2",
			label: "Create",
			icon: <PlusOutlined />,
			onClick: () => router.push("/create"),
		},

		{
			key: "3",
			label: "Log out",
			icon: <LogoutOutlined />,
			onClick: () => signOut(),
		},
	];
	const { data: session } = useSession();

	return (
		<Dropdown menu={{ items }}>
			<Button onClick={(e) => e.preventDefault()}>
				<Space>
					{session?.user?.name}
					<CaretDownFilled />
				</Space>
			</Button>
		</Dropdown>
	);
}
