import { prisma } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse, type NextRequest } from "next/server";

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

	return `	
			Based on the following project specifications:

			Difficulty: ${difficulty}
			Type: ${type}
			Tech Stack: ${techStackString}
			Eager to Learn New Technologies: ${eagerToLearn}
			
			Create a step-by-step project roadmap outlining the development process. The roadmap should:
			Start with a brief, high-level overview of the project's purpose and goals. This overview should be concise and understandable to someone with a general understanding of ${type} systems.
			Break down the project into manageable phases or stages. Each phase should have a clear objective.
			For each phase, detail the specific tasks and steps required for completion. Use action-oriented language (e.g., "Design the database schema," "Implement the API endpoint for...", "Write unit tests for...").
			Specify the key deliverables for each phase. This could include things like documentation, working code, or completed tests.
			Account for the fact that this project is of ${difficulty} difficulty and prioritize using ${techStackString}. ${eagerToLearn ? "use" : "Avoid"} introducing complex new technologies or architectural approaches unnecessarily. Focus on efficient and reliable execution using familiar tools.
			Do NOT provide any actual code solutions or code snippets. This roadmap should focus solely on the steps and logic required to build the ${type} based pro, not the specific code implementation and output should be in Markdown format.
			Assume the user has a knowledge of ${type} ${techStackString} environment."`;
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
};
export async function POST(req: NextRequest) {
	const { difficulty, type, techStack, eagerToLearn }: ReqType =
		await req.json();

	// add json type response from google
	const prompt = getPrompt({ difficulty, type, techStack, eagerToLearn });
	const result = await model.generateContent(prompt);
	const response = result.response.text();
	console.log({ response });

	const title = response.split("\n")[0].replace("# ", "");

	const storeIdDb = await prisma.project.create({
		data: {
			title,
			difficulty,
			type,
			techStack,
			eagerToLearn,
			authorId: 1,
		},
	});
	return NextResponse.json(response);
}
