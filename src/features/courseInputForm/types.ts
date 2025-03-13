import { formStateType } from "@/types/courseFormSliceTypes";
import { SelectProps } from "@radix-ui/react-select";
import { SwitchProps } from "@radix-ui/react-switch";
import { RefAttributes } from "react";

type mandatoryFormFields = {
  label: string;
  name: keyof formStateType;
};

type textInputField = {
  type: "input";
  attributes: React.InputHTMLAttributes<HTMLInputElement>;
};
type textAreaInputField = {
  type: "text-area";
  attributes: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};
type selectInputField = {
  type: "select";
  options: string[];
  attributes: SelectProps;
};
type switchInputField = {
  type: "switch";
  attributes: Omit<SwitchProps & RefAttributes<HTMLButtonElement>, "ref">;
};

export type FormFieldType = "input" | "text-area" | "select" | "switch";

export type FormField = mandatoryFormFields &
  (textAreaInputField | selectInputField | textInputField | switchInputField);
