// const { GoogleGenerativeAI } = require("@google/generative-ai");
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse, type NextRequest } from "next/server";

if (!process.env.GOOGLE_API_KEY) {
	throw new Error("GOOGLE_API_KEY is not defined");
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 40,
	maxOutputTokens: 8192,
	responseMimeType: "application/json",
};

export async function POST(req: NextRequest) {
	const { data } = await req.json();

	// make the polished prompt
	// add json type response from google
	const prompt = "Explain how AI works inshortly";
	const result = await model.generateContent(prompt);
	console.log(JSON.stringify(result));
	return NextResponse.json(result.response.text());
}
