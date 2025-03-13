import CodeEditor from "@/components/CodeEditor";
import SelectInput from "@/components/SelectInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { BsPlayFill } from "react-icons/bs";
import { LANGUAGES } from "../constants/constants";
import { codeExampleType } from "@/types/chapterSliceTypes";

type codeRunnerProps = {
  code: codeExampleType;
};

const CodeRunner = ({ code }: codeRunnerProps) => {
  const [editorType, setEditorType] = useState<"input" | "output">("input");
  const [language, setLanguage] = useState<string>(code.language);
  return (
    <div className="space-y-5 rounded-lg bg-secondary p-1 pt-5 text-sm">
      <div className="flex items-center justify-between px-5">
        <div className="flex flex-wrap items-center justify-center gap-5 md:flex-nowrap">
          <button
            onClick={() => {
              setEditorType("input");
            }}
            className={`${
              editorType === "input" ? "text-primary" : ""
            } font-bold`}
          >
            Editor
          </button>
          <button
            onClick={() => {
              setEditorType("output");
            }}
            className={`${
              editorType === "output" ? "text-primary" : ""
            } font-bold`}
          >
            Output
          </button>
          <SelectInput
            options={LANGUAGES}
            placeholder="language"
            attributes={{
              defaultValue: language,
              onValueChange: (e) => {
                setLanguage(e);
              },
            }}
          />
        </div>
        <Button size={"sm"}>
          Run <BsPlayFill />
        </Button>
      </div>
      <CodeEditor
        code={code}
        language={language}
        type={editorType}
        setType={setEditorType}
      />
    </div>
  );
};

export default CodeRunner;
