import { prisma } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/auth";

if (!process.env.GOOGLE_API_KEY) {
	throw new Error("GOOGLE_API_KEY is not defined");
}

type DataType = {
	difficulty: string;
	type: string;
	techStack: string[];
	eagerToLearn: boolean;
};

function getPrompt(data: DataType) {
	const { difficulty, type, techStack, eagerToLearn } = data;
	// for multiple tech stack
	const techStackString = techStack.join(", ");

	const instruction = `- instruction you should know:
			-> do not include the code in the response
			-> use latest tech and commands to run
			-> do not include the any outdated tech stack or outdated commands
			-> use technical terms and jargon
			-> use humanly language and do not use any ai like language
			-> give commands like this:
			    """bash
				commands
				"""
			`;

	return `
	  		${instruction}
			# Project Prompt: Sustainable Food Delivery Platform

			## Context
			Provide a detailed description for creating a fullstack web development project. This project should focus on building a sustainable food delivery platform using the specified tech stack and following the given structure. The output should include a project name, vision, societal and developer impact, a step-by-step roadmap, and potential challenges.

			## Instructions

			1. **Project Details:**
			- **Difficulty Level:** ${difficulty}
			- **Type of Project:** ${type}
			- **Tech Stack:** 
				- ${techStackString}
			- ${
				eagerToLearn ? "use" : "Avoid"
			} introducing complex new technologies or architectural approaches unnecessarily. Focus on efficient and reliable execution using familiar tools.

			2. **Output Requirements:**
			- **Project Name:** Provide a unique and relevant name for the project.
			- **Vision of the Project:** Explain the purpose and goals of the project, highlighting its significance.
			- **Benefit:** Describe the positive impact the project will have on society.
			- **Why you should do:** Outline the skills and experiences the developer will gain from working on the project.
			- **Roadmap to Build the Project: **
				1. **Project Setup:** Initial setup instructions, including configuring the tech stack and setting up Docker.
				2. **Frontend Development:** Steps to design and develop the user interface, implement authentication, and manage state with Redux.
				3. **Backend Development:** Instructions for setting up the server, creating RESTful APIs, and handling data management.
				4. **Integration:** Guidelines for connecting the frontend with the backend and implementing real-time updates.
				5. **Testing and Deployment:** Steps for writing tests, setting up CI/CD pipelines, and deploying the application.
			- **Challenges the Developer Might Face:** Identify potential difficulties the developer may encounter during the project and provide suggestions for overcoming them.`;
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// --- might be configuring this part
// const generationConfig = {
// 	temperature: 1,
// 	topP: 0.95,
// 	topK: 40,
// 	maxOutputTokens: 8192,
// 	responseMimeType: "application/json",
// };

type ReqType = {
	difficulty: string;
	type: string;
	techStack: string[];
	eagerToLearn: boolean;
	authorId: string;
};
export async function POST(req: NextRequest) {
	const { difficulty, type, techStack, eagerToLearn }: ReqType =
		await req.json();

	const session = await auth();
	if (!session) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	// add json type response from google
	const prompt = getPrompt({ difficulty, type, techStack, eagerToLearn });
	const result = await model.generateContent(prompt);
	const user = await prisma.user.findUnique({
		where: { email: session?.user?.email ?? "" },
	});
	const response = result.response.text();

	const title = response.split("\n")[0].replace("# ", "");

	await prisma.project.create({
		data: {
			title,
			difficulty,
			type,
			content: response,
			techStack,
			eagerToLearn,
			authorId: user?.id ?? "",
		},
	});

	return NextResponse.json(response);
}
