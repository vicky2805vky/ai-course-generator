import CodeEditor from "@/components/CodeEditor";
import { codeExampleType } from "@/types/chapterSliceTypes";
import useCodeRunner from "../../hooks/useCodeRunner";
import CodeEditorTabs from "./CodeEditorTabs";
import CodeRunnerControls from "./CodeRunnerControls";

type CodeRunnerProps = {
  code: codeExampleType;
};

const CodeRunner = ({ code }: CodeRunnerProps) => {
  const {
    input,
    setInput,
    output,
    editorType,
    setEditorType,
    language,
    setLanguage,
    runCode,
    loading,
  } = useCodeRunner(code);

  return (
    <div className="space-y-5 rounded-lg bg-secondary p-1 pt-5 text-sm">
      <div className="flex items-center justify-between px-5">
        <CodeEditorTabs editorType={editorType} setEditorType={setEditorType} />
        <CodeRunnerControls
          language={language}
          setLanguage={setLanguage}
          runCode={runCode}
          loading={loading}
        />
      </div>
      <CodeEditor
        type={editorType}
        language={language}
        input={input}
        output={output}
        setInput={setInput}
      />
    </div>
  );
};

export default CodeRunner;
