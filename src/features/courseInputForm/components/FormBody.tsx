import { Label } from "@/components/ui/label";
import { FORM_FIELD_INPUTS } from "../constants";
import createInputField from "../utils/createInputField";
import useChangeHandler from "../hooks/useChangeHandler";
import { FormField } from "../types";

type formBodyProps = {
  currentFormStep: number;
};

const formIndices = ["form1", "form2", "form3"] as const;

const FormBody = ({ currentFormStep }: formBodyProps) => {
  const handleChange = useChangeHandler();
  return (
    <form
      id="course-form"
      className="mx-auto flex h-52 flex-col justify-center gap-5 md:w-4/5"
    >
      {FORM_FIELD_INPUTS[formIndices[currentFormStep - 1]].map((field, i) => {
        handleChange(field);
        return <FormControl key={i} field={field} />;
      })}
    </form>
  );
};

export default FormBody;

const FormControl = ({ field }: { field: FormField }) => {
  return (
    <div className="flex items-center [&>*]:flex-1">
      <Label className="text-xs font-bold md:text-base">{field.label}:</Label>
      {createInputField(field)}
    </div>
  );
};
