import { model, generationConfig } from "@/configs/gemini";
import { OUTLINE_GENERATE_HISTORY } from "@/constants/promptHistories";
import { jsonrepair } from "jsonrepair";

export async function generateCourseOutline(prompt: string) {
  const chatSession = model.startChat({
    generationConfig,
    history: OUTLINE_GENERATE_HISTORY,
  });
  try {
    const result = await chatSession.sendMessage(prompt);
    return JSON.parse(jsonrepair(result.response.text()));
  } catch (error) {
    console.error("Failed to generate course outline:", error);
    return null;
  }
}
