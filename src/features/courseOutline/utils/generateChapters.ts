import { ChatSession } from "@google/generative-ai";
import { jsonrepair } from "jsonrepair";

export async function generateChapterContent(
  prompt: string,
  chatSession: ChatSession,
) {
  try {
    const result = await chatSession.sendMessage(prompt);
    const output = JSON.parse(jsonrepair(result.response.text()));
    return output;
  } catch (error) {
    console.error("Failed to generate chapter content:", error);
    return null;
  }
}
