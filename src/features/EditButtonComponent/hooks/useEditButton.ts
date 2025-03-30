import { setOutlineField } from "@/services/slices/courseOutlineSlice";
import {
  chapterType,
  courseOutlineType,
} from "@/types/courseOutlineSliceTypes";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const useEditButton = (
  fieldName: keyof courseOutlineType,
  defaultValue: chapterType | string,
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const editFunction = () => {
    if (textareaRef.current && typeof defaultValue !== "string") {
      dispatch(
        setOutlineField({
          key: fieldName,
          value: {
            ...defaultValue,
            chapterName: inputRef.current?.value || defaultValue.chapterName,
            lessons: textareaRef.current.value
              .split("\n")
              .map((lesson) => lesson.trim())
              .filter((filter) => filter),
          },
        }),
      );
    } else {
      dispatch(
        setOutlineField({
          key: fieldName,
          value: inputRef.current?.value || textareaRef.current?.value || "",
        }),
      );
    }
  };

  return { inputRef, textareaRef, editFunction };
};

export default useEditButton;
