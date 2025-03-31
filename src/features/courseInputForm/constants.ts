import { FormField } from "./types";

type formFieldInputType = {
  form1: FormField[];
  form2: FormField[];
  form3: FormField[];
};

export const FORM_FIELD_INPUTS: formFieldInputType = {
  form1: [
    {
      label: "Category",
      type: "input",
      name: "category",
      attributes: {
        id: "category",
        placeholder: "programming, sports",
        required: true,
      },
    },
    {
      label: "Topic",
      type: "input",
      name: "topic",
      attributes: {
        id: "topic",
        placeholder: "python, chess",
        required: true,
      },
    },
  ],
  form2: [
    {
      label: "preference",
      type: "text-area",
      name: "preference",
      attributes: {
        id: "preference",
        placeholder: "How Should the Course Be?",
      },
    },
    {
      label: "level",
      type: "select",
      name: "level",
      attributes: {},

      options: ["beginner", "intermediate", "advanced"],
    },
  ],
  form3: [
    {
      label: "Total duration",
      type: "select",
      name: "duration",
      attributes: {},

      options: ["less than 1 hrs", "1-3 hrs", "3-5 hrs", "more than 5 hrs"],
    },
    {
      label: "Number of chapters",
      type: "input",
      name: "chapters",
      attributes: {
        type: "number",
        min: 1,
        max: 10,
        required: true,
      },
    },
  ],
};
