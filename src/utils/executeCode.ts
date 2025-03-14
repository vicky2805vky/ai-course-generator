import axios from "axios";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (code: string, language: string) => {
  const formattedCode = code.replace(/\\n/g, "\n");

  try {
    const response = await API.post("/execute", {
      language: language,
      version: "*",
      files: [
        {
          content: formattedCode,
        },
      ],
    });

    return response.data;
  } catch (error) {
    console.log("Execution Error:", error);
    return { error: "Failed to execute code" };
  }
};
