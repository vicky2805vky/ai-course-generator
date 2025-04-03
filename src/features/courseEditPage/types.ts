import { image } from "@/components/searchImage/types";

export type editFieldsValues = {
  title: string | undefined;
  description: string | undefined;
  category: string | undefined;
};

export type editField = {
  name: "title" | "description" | "category";
  type: "input" | "textarea";
};
