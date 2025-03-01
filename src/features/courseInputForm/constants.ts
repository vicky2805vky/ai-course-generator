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
    {
      label: "Description",
      type: "text-area",
      name: "description",
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
      name: "level",
      attributes: {},

      options: ["beginner", "intermediate", "advanced"],
    },
    {
      label: "duration",
      type: "select",
      name: "duration",
      attributes: {},

      options: ["less than 1 hrs", "1-3 hrs", "3-5 hrs", "more than 5 hrs"],
    },
    {
      label: "chapters",
      type: "select",
      name: "chapters",
      attributes: {},
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
  ],
  form3: [
    {
      label: "include video",
      type: "switch",
      name: "video",
      attributes: {
        id: "include-video",
        required: true,
      },
    },
    {
      label: "include quiz",
      type: "switch",
      name: "quiz",
      attributes: {
        id: "include-quiz",
        required: true,
      },
    },
  ],
};
