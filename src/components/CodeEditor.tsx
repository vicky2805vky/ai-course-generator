import Editor from "@monaco-editor/react";
import { useTheme } from "@/components/ThemeProvider";

type CodeEditorProps = {
  type: "input" | "output";
  language: string;
  input: string;
  output: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const CodeEditor = ({
  type,
  language,
  input,
  output,
  setInput,
}: CodeEditorProps) => {
  const { theme } = useTheme();
  return (
    <>
      {type === "input" && (
        <Editor
          theme={theme === "dark" ? "vs-dark" : "vs-light"}
          height="50vh"
          defaultLanguage={language}
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
    </>
  );
};

export default CodeEditor;
