import { Label } from "@/components/ui/label";
import { FORM_FIELD_INPUTS } from "../constants";
import createInputField from "../utils/createInputField";

type formBodyProps = {
  currentFormStep: number;
};

const formIndices = ["form1", "form2", "form3"] as const;

const FormBody = ({ currentFormStep }: formBodyProps) => {
  return (
    <form className="mx-auto flex h-52 flex-col justify-center gap-5 md:w-4/5">
      {FORM_FIELD_INPUTS[formIndices[currentFormStep - 1]].map((field) => (
        <div className="flex items-center [&>*]:flex-1">
          <Label className="text-xs font-bold text-secondary md:text-base">
            {field.label}:
          </Label>
          {createInputField(field)}
        </div>
      ))}
    </form>
  );
};

export default FormBody;
