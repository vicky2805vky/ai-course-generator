import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { editFieldsValues } from "../types";

type CourseEditPageInputsType = {
  field: {
    name: "title" | "description" | "category";
    type: "input" | "textarea";
  };
  editFieldsValues: editFieldsValues;
  setEditFieldsValues: React.Dispatch<editFieldsValues>;
};

const CourseEditPageInputs = ({
  field,
  editFieldsValues,
  setEditFieldsValues,
}: CourseEditPageInputsType) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const newEditFieldValues = { ...editFieldsValues };
    newEditFieldValues[field.name] = e.target.value;
    setEditFieldsValues(newEditFieldValues);
  };
  return (
    <>
      <label htmlFor={field.name} className="text-xl font-bold">
        {field.name}:
      </label>
      {field.type === "input" ? (
        <Input
          placeholder={field.name}
          id={field.name}
          value={editFieldsValues[field.name]}
          onChange={handleChange}
        />
      ) : (
        <Textarea
          placeholder={field.name}
          id={field.name}
          value={editFieldsValues[field.name]}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default CourseEditPageInputs;
