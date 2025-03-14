import SelectInput from "@/components/SelectInput";
import { LANGUAGES } from "../../constants/constants";
import { Button } from "@/components/ui/button";
import { TbReload } from "react-icons/tb";
import { BsPlayFill } from "react-icons/bs";

type codeRunnerControlsProps = {
  language: string;
  setLanguage: (lang: string) => void;
  runCode: () => void;
  loading: boolean;
};

const CodeRunnerControls = ({
  language,
  setLanguage,
  runCode,
  loading,
}: codeRunnerControlsProps) => {
  return (
    <div className="flex items-center gap-5">
      <SelectInput
        options={LANGUAGES}
        placeholder="Language"
        attributes={{
          defaultValue: language,
          onValueChange: (e) => setLanguage(e),
        }}
      />
      <Button size="sm" onClick={runCode} disabled={loading}>
        Run{loading && "ning..."}
        {loading ? <TbReload className="animate-spin" /> : <BsPlayFill />}
      </Button>
    </div>
  );
};

export default CodeRunnerControls;
