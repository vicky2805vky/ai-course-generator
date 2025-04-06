import { generationConfig } from "@/configs/gemini";
import { API_CHECK_HISTORY } from "@/constants/promptHistories";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const checkAi = async (apiKey: string) => {
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  const chatSession = model.startChat({
    generationConfig,
    history: API_CHECK_HISTORY,
  });

  const prompt =
    "I am sending this request through api to check the api is working or not so just return an empty space without any letters";
  try {
    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Failed to send request: ", error);
    return null;
  }
};
