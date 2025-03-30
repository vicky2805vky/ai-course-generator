import {
  chapterType,
  courseOutlineType,
} from "@/types/courseOutlineSliceTypes";
import { useEffect, useState } from "react";
import EditButtonComponentBodyString from "./EditButtonComponentBody/EditButtonComponentBodyString";
import EditButtonComponentBodyChapter from "./EditButtonComponentBody/EditButtonComponentBodyChapter";

type editButtonComponentBodyProps = {
  fieldName?: keyof courseOutlineType;
  inputRef: React.RefObject<HTMLInputElement>;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  defaultValue: chapterType | string;
  editFunction: () => void;
};

const EditButtonComponentBody = (props: editButtonComponentBodyProps) => {
  const { defaultValue, inputRef, textareaRef } = props;

  const [chapterContent, setChapterContent] = useState<chapterType | null>(
    null,
  );

  useEffect(() => {
    if (typeof defaultValue !== "string") {
      setChapterContent(defaultValue);
    }
  }, []);

  return (
    <form className="flex items-center gap-5">
      <EditButtonComponentBodyString {...props} />
      {chapterContent && (
        <EditButtonComponentBodyChapter
          inputRef={inputRef}
          textareaRef={textareaRef}
          chapterContent={chapterContent}
        />
      )}
    </form>
  );
};

export default EditButtonComponentBody;
