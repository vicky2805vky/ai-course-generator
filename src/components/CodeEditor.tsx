import Editor from "@monaco-editor/react";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "./ui/button";
import { executeCode } from "@/utils/executeCode";
import { codeExampleType } from "@/types/chapterSliceTypes";

type CodeEditorProps = {
  code: codeExampleType;
  type: "input" | "output";
  setType: React.Dispatch<React.SetStateAction<"input" | "output">>;
  language: string;
};

const CodeEditor = ({ type, setType, language, code }: CodeEditorProps) => {
  const { theme } = useTheme();
  const [input, setInput] = useState(code.code || "");
  const [output, setOutput] = useState("");

  return (
    <>
      {type === "input" && (
        <Editor
          theme={theme === "dark" ? "vs-dark" : "vs-light"}
          height="50vh"
          defaultLanguage="python"
          language={language}
          defaultValue="// write your code here"
          value={input.replace(/\\n/g, "\n")}
          options={{
            minimap: { enabled: false },
            lineHeight: 40,
            fontSize: window.innerWidth < 500 ? 12 : 16,
            scrollbar: { vertical: "hidden", horizontal: "hidden" },
            stickyScroll: { enabled: false },
            cursorSmoothCaretAnimation: "on",
            bracketPairColorization: { enabled: true },
          }}
          onChange={(string) => {
            if (!string) return;
            type === "input" && setInput(string);
          }}
        />
      )}
      {type === "output" && (
        <div className="text:xs h-[50vh] w-full overflow-scroll whitespace-pre-line border border-solid border-primary bg-white px-20 py-2 font-mono dark:bg-[#1E1E1E] md:text-base/loose">
          <p>
            {output !== "" ? output : "Run the code to see the output here"}
          </p>
        </div>
      )}
      <Button
        onClick={async () => {
          const output = await executeCode(input, language);
          console.log(output);

          if (output.error) {
            setType("output");
            setOutput(output.error);
            return;
          }

          const answer = output.run.stdout;
          const error = output.run.stderr;
          setType("output");
          setOutput(answer || error);
        }}
      >
        submit
      </Button>
    </>
  );
};

export default CodeEditor;
