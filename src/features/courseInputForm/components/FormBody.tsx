import { Label } from "@/components/ui/label";
import { FORM_FIELD_INPUTS } from "../constants";
import createInputField from "../utils/createInputField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { changeState } from "@/state/slices/courseFormSlice";

type formBodyProps = {
  currentFormStep: number;
};

const formIndices = ["form1", "form2", "form3"] as const;

const FormBody = ({ currentFormStep }: formBodyProps) => {
  const courseFormData = useSelector((state: RootState) => state.courseForm);
  const dispatch = useDispatch();
  return (
    <form
      id="course-form"
      className="mx-auto flex h-52 flex-col justify-center gap-5 md:w-4/5"
    >
      {FORM_FIELD_INPUTS[formIndices[currentFormStep - 1]].map((field, i) => {
        if (field.type === "input") {
          field.attributes.value = courseFormData[field.name] as string;
          field.attributes.onChange = (e) => {
            dispatch(changeState({ key: field.name, value: e.target.value }));
          };
        } else if (field.type === "text-area") {
          field.attributes.value = courseFormData[field.name] as string;
          field.attributes.onChange = (e) => {
            dispatch(changeState({ key: field.name, value: e.target.value }));
          };
        } else if (field.type === "select" && field.attributes) {
          field.attributes.defaultValue = courseFormData[field.name] as string;
          field.attributes.onValueChange = (e) => {
            dispatch(changeState({ key: field.name, value: e }));
          };
        } else if (field.type === "switch") {
          field.attributes.checked = courseFormData[field.name] as boolean;
          field.attributes.onCheckedChange = () => {
            dispatch(
              changeState({
                key: field.name,
                value: !field.attributes.checked,
              }),
            );
          };
        }
        return (
          <div className="flex items-center [&>*]:flex-1" key={i}>
            <Label
              key={i}
              className="text-xs font-bold text-secondary md:text-base"
            >
              {field.label}:
            </Label>
            {createInputField(field)}
          </div>
        );
      })}
    </form>
  );
};

export default FormBody;
