import { model, generationConfig } from "@/configs/gemini";
import { CHAPTER_GENERATE_HISTORY } from "@/constants/promptHistories";
import { jsonrepair } from "jsonrepair";

export async function generateChapterContent(prompt: string) {
  const chatSession = model.startChat({
    generationConfig,
    history: CHAPTER_GENERATE_HISTORY,
  });
  try {
    const result = await chatSession.sendMessage(prompt);
    const output = JSON.parse(jsonrepair(result.response.text()));
    return output;
  } catch (error) {
    console.error("Failed to generate chapter content:", error);
    return null;
  }
}
