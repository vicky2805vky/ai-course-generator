type codeEditorTabsProps = {
  editorType: "input" | "output";
  setEditorType: (type: "input" | "output") => void;
};
const CodeEditorTabs = ({ editorType, setEditorType }: codeEditorTabsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 md:flex-nowrap">
      <button
        onClick={() => setEditorType("input")}
        className={`${editorType === "input" ? "text-primary" : ""} font-bold`}
      >
        Editor
      </button>
      <button
        onClick={() => setEditorType("output")}
        className={`${editorType === "output" ? "text-primary" : ""} font-bold`}
      >
        Output
      </button>
    </div>
  );
};

export default CodeEditorTabs;
