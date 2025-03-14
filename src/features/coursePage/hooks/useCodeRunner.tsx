import { useState } from "react";
import { executeCode } from "@/utils/executeCode";
import { codeExampleType } from "@/types/chapterSliceTypes";

const useCodeRunner = (code: codeExampleType) => {
  const [editorType, setEditorType] = useState<"input" | "output">("input");
  const [language, setLanguage] = useState<string>(
    code.language === "c++" ? "cpp" : code.language,
  );
  const [input, setInput] = useState(code.code || "");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    setEditorType("input");
    setLoading(true);
    const result = await executeCode(input, language);
    setLoading(false);

    if (result.error) {
      setEditorType("output");
      setOutput(result.error);
      return;
    }

    setEditorType("output");
    setOutput(result.run.stdout || result.run.stderr);
  };

  return {
    input,
    setInput,
    output,
    editorType,
    setEditorType,
    language,
    setLanguage,
    runCode,
    loading,
  };
};

export default useCodeRunner;
