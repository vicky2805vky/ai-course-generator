type mandatoryFormFields = {
  label: string;
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
};
type switchInputField = {
  type: "switch";
  attributes: React.InputHTMLAttributes<HTMLInputElement>;
};

export type FormFieldType = "input" | "text-area" | "select" | "switch";

export type FormField = mandatoryFormFields &
  (textAreaInputField | selectInputField | textInputField | switchInputField);
