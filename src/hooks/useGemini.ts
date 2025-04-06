import {
  CHAPTER_GENERATE_HISTORY,
  OUTLINE_GENERATE_HISTORY,
  API_CHECK_HISTORY,
} from "@/constants/promptHistories";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generationConfig } from "@/configs/gemini";

const histories = {
  chapter: CHAPTER_GENERATE_HISTORY,
  outline: OUTLINE_GENERATE_HISTORY,
  check: API_CHECK_HISTORY,
};

const useGemini = (apiKey: string, history: keyof typeof histories) => {
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  const chatSession = model.startChat({
    generationConfig,
    history: histories[history],
  });

  return chatSession;
};

export default useGemini;
