import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  chapterType,
  courseOutlineType,
} from "@/types/courseOutlineSliceTypes";
import { Label } from "@radix-ui/react-label";

const EditButtonComponentBodyString = ({
  defaultValue,
  inputRef,
  textareaRef,
  fieldName,
}: {
  fieldName?: keyof courseOutlineType;
  inputRef: React.RefObject<HTMLInputElement>;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  defaultValue: chapterType | string;
}) => {
  if (typeof defaultValue !== "string") return;

  return (
    <div className="flex w-full justify-between gap-5">
      <Label className="font-bold">{fieldName?.replace("course", "")}:</Label>
      {fieldName === "courseDescription" ? (
        <Textarea required ref={textareaRef} defaultValue={defaultValue} />
      ) : (
        <Input
          required
          className="h-7 text-xs"
          ref={inputRef}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
};

export default EditButtonComponentBodyString;
