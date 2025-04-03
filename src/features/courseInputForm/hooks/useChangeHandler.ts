import { changeFormField } from "@/services/slices/courseFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { FormField } from "../types";

const useChangeHandler = () => {
  const courseFormData = useSelector((state: RootState) => state.courseForm);
  const dispatch = useDispatch();

  return (field: FormField) => {
    if (field.type === "input" || field.type === "text-area") {
      field.attributes.value = courseFormData[field.name] as string;
      field.attributes.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFormField({ key: field.name, value: e.target.value }));
      };
    } else if (field.type === "select" && field.attributes) {
      field.attributes.defaultValue = courseFormData[field.name] as string;
      field.attributes.onValueChange = (e) => {
        dispatch(changeFormField({ key: field.name, value: e }));
      };
    }
  };
};

export default useChangeHandler;
