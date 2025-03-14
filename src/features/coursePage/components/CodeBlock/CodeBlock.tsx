import { useTheme } from "@/components/ThemeProvider";
import { LuClipboard } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "sonner";

type CodeBlockProps = {
  codeString: string;
  language: string;
};

const CodeBlock = ({ codeString, language }: CodeBlockProps) => {
  const { theme } = useTheme();

  return (
    <div className="rounded-lg bg-secondary p-1 text-secondary-foreground">
      <div className="flex items-center justify-between px-6 py-2 text-xs">
        <p>Example Code</p>
        <p className="flex items-center gap-2">
          <LuClipboard
            className="cursor-pointer text-sm"
            onClick={() => {
              toast("copied!", { duration: 2000 });
              navigator.clipboard.writeText(codeString);
            }}
          />
          Copy
        </p>
      </div>

      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? atomOneDark : atomOneLight}
      >
        {codeString.replace(/\\n/g, "\n")}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
