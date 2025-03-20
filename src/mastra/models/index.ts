import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";

// Google Gemini AIプロバイダーの作成
export const google = createGoogleGenerativeAI({
	apiKey: process.env.GOOGLE_API_KEY || "",
});

export const openai = createOpenAI({
	apiKey: process.env.OPENAI_API_KEY || "",
});

// エンべディングモデルのインスタンス
export const googleEmbeddingModel =
	google.textEmbeddingModel("text-embedding-004");

export const openaiEmbeddingModel =
	openai.textEmbeddingModel("text-embedding-004");
