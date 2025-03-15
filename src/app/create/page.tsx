"use client";

import React, { useEffect, useState } from "react";
import { Select, Button, Form, message, Tooltip, ConfigProvider } from "antd";
import Output from "@/components/create/Output";
import axios, { type AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import technologies from "@/constants/technologies";
import ProjectLoading from "@/components/create/projectLoading";
import { FiChevronDown } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme"; // Create this hook
import { getAntdTheme } from "@/lib/antd-theme";

const { Option } = Select;
const { Item } = Form;

const SuffixIcon = () => {
	return <FiChevronDown className="text-lg font-thin text-foreground" />;
};

const IndexPage = () => {
	const [form] = Form.useForm();
	const [country, setCountry] = useState("");
	const [showLoading, setShowLoading] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		const userLanguage = navigator.language || "en-US";
		const countryCode = userLanguage.split("-")[1] || "US";
		setCountry(countryCode.toUpperCase());
	}, []);

	const { data, isLoading, refetch } = useQuery({
		queryKey: ["project"],
		queryFn: async () => {
			const { data } = await axios.post("/api/create", {
				...form.getFieldsValue(),
				country,
			});
			return data;
		},
		enabled: false,
	});

	const onFinish = async () => {
		try {
			setShowLoading(true);
			document.getElementById("output")?.scrollIntoView({
				behavior: "smooth",
				block: "end",
			});
			await refetch();
			message.success("Form submitted successfully!");
			setShowLoading(false);
			form.resetFields();
		} catch (error) {
			setShowLoading(false);
			const errorMessage = (error as AxiosError<{ message: string }>)?.response
				?.data?.message;
			message.error(errorMessage ? errorMessage : "Something is wrong.");
		}
	};

	return (
		<ConfigProvider theme={getAntdTheme(theme === "dark")}>
			<div className="min-h-[90vh] bg-background text-foreground lg:pt-12">
				<div className="py-8 text-center w-[90vw] mx-auto">
					<p className="text-lg text-muted-foreground">
						Tell us your preferences and we&apos;ll generate the perfect project
						for you
					</p>
				</div>
				<Form
					form={form}
					onFinish={onFinish}
					layout="vertical"
					className="grid grid-cols-1 lg:grid-cols-9 items-end lg:gap-4 w-full md:w-[70vw] mx-auto px-4"
				>
					<Item
						name="difficulty"
						label="Difficulty Level"
						className="col-span-2 font-semibold"
						rules={[
							{ required: true, message: "Please select a difficulty level!" },
						]}
					>
						<Select
							placeholder="Select difficulty level"
							className="font-normal"
							suffixIcon={<SuffixIcon />}
						>
							<Option value="easy">Easy</Option>
							<Option value="medium">Medium</Option>
							<Option value="hard">Hard</Option>
						</Select>
					</Item>

					<Item
						name="type"
						label="Type of Project"
						className="col-span-2 font-semibold"
						rules={[
							{ required: true, message: "Please select a project type!" },
						]}
					>
						<Select
							className="font-normal"
							placeholder="Select project type"
							suffixIcon={<SuffixIcon />}
						>
							<Option value="frontend">Frontend</Option>
							<Option value="backend">Backend</Option>
							<Option value="full-stack">Full-stack</Option>
						</Select>
					</Item>

					<Item
						name="techStack"
						label="Tech Stack You Know"
						className="col-span-2 font-semibold"
						rules={[{ required: true, message: "Please select a tech stack!" }]}
					>
						<Select
							mode="tags"
							className="font-normal"
							placeholder="Select tech stack"
							suffixIcon={<SuffixIcon />}
							maxTagCount={"responsive"}
							maxTagPlaceholder={(omittedValues) => (
								<Tooltip
									styles={{ root: { pointerEvents: "none" } }}
									title={omittedValues.map(({ label }) => label).join(", ")}
								>
									<span>{omittedValues.length}+</span>
								</Tooltip>
							)}
						>
							{technologies.map((tech) => (
								<Option key={tech} value={tech}>
									{tech}
								</Option>
							))}
						</Select>
					</Item>

					<Item
						name="eagerToLearn"
						label="Eager to Learn"
						className="col-span-2 font-semibold"
						rules={[{ required: true, message: "Please select an option!" }]}
					>
						<Select
							className="font-normal"
							placeholder="Are you eager to learn?"
							suffixIcon={<SuffixIcon />}
						>
							<Option value={true}>Yes</Option>
							<Option value={false}>No</Option>
						</Select>
					</Item>

					<Item>
						<Button
							htmlType="submit"
							type="primary"
							className="w-full px-2 py-2 font-semibold border-none rounded-md text-buttonText bg-buttonPrimary hover:bg-red-800 col-span-1"
							loading={isLoading}
						>
							Submit
						</Button>
					</Item>
				</Form>
				<div id="output">
					{showLoading && <ProjectLoading />}
					{data && !showLoading && <Output data={data} />}
				</div>
			</div>
		</ConfigProvider>
	);
};

export default IndexPage;
