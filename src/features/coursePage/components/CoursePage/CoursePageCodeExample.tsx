import { codeExampleType } from "@/types/chapterSliceTypes";
import CodeBlock from "../CodeBlock/CodeBlock";
import CodeRunner from "../CodeBlock/CodeRunner";

const CoursePageCodeExample = ({
  codeExample,
}: {
  codeExample: codeExampleType;
}) => {
  if (!codeExample) return null;
  return (
    <div className="code-example">
      <h6 className="text-lg font-bold">Example</h6>
      {codeExample.type === "executable" ? (
        <CodeRunner code={codeExample} />
      ) : (
        <CodeBlock
          codeString={codeExample.code}
          language={codeExample.language}
        />
      )}
    </div>
  );
};
export default CoursePageCodeExample;
