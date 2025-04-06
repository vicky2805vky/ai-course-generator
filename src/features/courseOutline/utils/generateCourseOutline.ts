import { ChatSession } from "@google/generative-ai";
import { jsonrepair } from "jsonrepair";

export async function generateCourseOutline(
  prompt: string,
  chatSession: ChatSession,
) {
  try {
    const result = await chatSession.sendMessage(prompt);
    return JSON.parse(jsonrepair(result.response.text()));
  } catch (error) {
    console.error("Failed to generate course outline:", error);
    return null;
  }
}
