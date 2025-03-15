export const runtime = "nodejs";
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

function getPrompt(data: DataType) {
	const { difficulty, type, techStack, eagerToLearn } = data;
	// for multiple tech stack
	const techStackString = techStack.join(", ");

	const instruction = `# Instructions for Response Format:
		- Do NOT include any code implementations in your response
		- Use ONLY the latest LTS versions of technologies and frameworks
		- AVOID recommending outdated tools like create-react-app
		- For React projects, recommend Vite, Next.js, or other modern tooling
		- For Node.js, use the current LTS version
		- Format terminal commands in code blocks using triple backticks with bash:
		  \`\`\`bash
		  command here
		  \`\`\`
		- Be concise but thorough in your explanations
		- Use technical terminology appropriate for the difficulty level
		- Use natural, human-like language
		- Organize your response with clear headings and bullet points
	`;

	return `
		${instruction}
		# Project Request: Web Development Project

		## Project Parameters
		- **Difficulty Level:** ${difficulty}
		- **Project Type:** ${type}
		- **Required Technologies:** ${techStackString}
		- **Learning Approach:** ${eagerToLearn ? "Developer is eager to learn new technologies and architectural patterns" : "Focus on familiar technologies and straightforward implementation"}

		## Output Requirements
		**Project Name:** Create a memorable, relevant name for this project
		
		1. **Project Overview:**
		   - What problem does this project solve?
		   - Who is the target audience?
		   - What are the key features and functionalities?
		   - How does it differ from existing solutions?
		
		2. **Stakeholder Benefits:**
		   - How will users benefit from this project?
		   - What value does it provide to businesses or organizations?
		   - How might it impact society or specific communities?
		   - What are the potential economic or social benefits?
		
		3. **Developer Growth:**
		   - What technical skills will be strengthened by building this project?
		   - What architectural patterns or principles will be learned?
		   - How will this project enhance a developer's portfolio?
		   - What career opportunities might this project prepare them for?
		
		4. **Development Roadmap:**
		   - Project Setup & Environment Configuration (using modern tooling)
		   - Frontend Architecture & Implementation
		   - Backend Development & API Design
		   - Data Management & Integration
		   - Testing, Deployment & DevOps
		
		5. **Technical Approach:**
		   - Recommended architecture and design patterns
		   - Specific libraries and tools to use with the required technologies
		   - Database design considerations
		   - API structure and integration points
		   - Performance and scalability considerations
		
		6. **Learning Resources:**
		   - Specific documentation, tutorials, or courses for key technologies
		   - Community resources or forums for support
		   - Books or articles that would be helpful
		
		7. **Potential Challenges and Solutions:**
		   - Technical hurdles the developer might face
		   - Common pitfalls in similar projects
		   - Strategies to overcome these challenges
		
		Make the project realistic, engaging, and aligned with current industry practices. Focus on creating something that addresses real-world needs while providing valuable learning opportunities.`;
}

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

	//---- add json type response from google
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
