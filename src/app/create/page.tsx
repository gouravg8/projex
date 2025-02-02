"use client";

import React, { useEffect, useState } from "react";
import { Select, Button, Form, message } from "antd";

const { Option } = Select;
const { Item } = Form;

const IndexPage = () => {
	const [form] = Form.useForm();
	const [country, setCountry] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Fetch country from OS (simplified example)
	useEffect(() => {
		const userLanguage = navigator.language || "en-US";
		const countryCode = userLanguage.split("-")[1] || "US";
		setCountry(countryCode.toUpperCase());
	}, []);

	const onFinish = (values: FormData) => {
		setIsSubmitting(true);
		message.success("Form submitted successfully!");
		console.log("Form Values:", { ...values, country });
		setTimeout(() => {
			setIsSubmitting(false);
			form.resetFields();
		}, 1000);
	};

	return (
		<div className="min-h-[90vh] bg-[#fafdff] lg:mt-12">
			<div className="my-8 text-center w-[90vw] mx-auto">
				<p className="text-lg text-muted-foreground">
					Tell us your preferences and we'll generate the perfect project for
					you
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
					<Select placeholder="Select difficulty level">
						<Option value="easy">Easy</Option>
						<Option value="medium">Medium</Option>
						<Option value="hard">Hard</Option>
					</Select>
				</Item>

				<Item
					name="type"
					label="Type of Project"
					className="col-span-2 font-semibold"
					rules={[{ required: true, message: "Please select a project type!" }]}
				>
					<Select placeholder="Select project type">
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
					<Select placeholder="Select tech stack">
						<Option value="js">JavaScript</Option>
						<Option value="ts">TypeScript</Option>
						<Option value="py">Python</Option>
						<Option value="ruby">Ruby</Option>
						<Option value="java">Java</Option>
					</Select>
				</Item>

				<Item
					name="eagerToLearn"
					label="Eager to Learn"
					className="col-span-2 font-semibold"
					rules={[{ required: true, message: "Please select an option!" }]}
				>
					<Select placeholder="Are you eager to learn?">
						<Option value={true}>Yes</Option>
						<Option value={false}>No</Option>
					</Select>
				</Item>

				<Item>
					<Button
						htmlType="submit"
						className={`w-full col-span-1 py-5 font-semibold text-backgroundDark lg:py-4 ${
							isSubmitting ? "bg-red-500" : "bg-buttonPrimary"
						}`}
					>
						Submit
					</Button>
				</Item>
			</Form>
		</div>
	);
};

export default IndexPage;
