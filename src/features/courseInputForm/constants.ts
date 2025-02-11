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
      attributes: {
        id: "category",
        placeholder: "programming, sports",
        required: true,
      },
    },
    {
      label: "Topic",
      type: "input",
      attributes: {
        id: "topic",
        placeholder: "python, chess",
        required: true,
      },
    },
    {
      label: "Description",
      type: "text-area",
      attributes: {
        id: "description",
        placeholder: "describe your course",
      },
    },
  ],
  form2: [
    {
      label: "level",
      type: "select",
      options: ["begginer", "intermediate", "advanced"],
    },
    {
      label: "duration",
      type: "select",
      options: ["less than 1 hrs", "1-3 hrs", "3-5 hrs", "more than 5 hrs"],
    },
    {
      label: "chapters",
      type: "select",
      options: ["3", "4", "5", "6", "7", "8", "9", "10"],
    },
  ],
  form3: [
    {
      label: "include video",
      type: "switch",
      attributes: {
        id: "include-video",
        required: true,
      },
    },
    {
      label: "include quiz",
      type: "switch",
      attributes: {
        id: "include-quiz",
        required: true,
      },
    },
  ],
};
