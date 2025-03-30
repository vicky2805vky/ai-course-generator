import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chapterType } from "@/types/courseOutlineSliceTypes";
import { Label } from "@radix-ui/react-label";

const EditButtonComponentBodyChapter = ({
  chapterContent,
  inputRef,
  textareaRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  chapterContent: chapterType;
}) => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Label className="font-bold">Chapter Name</Label>
      <Input
        required
        className="h-7 text-xs"
        ref={inputRef}
        defaultValue={chapterContent.chapterName}
      />
      <Label className="font-bold">Lessons</Label>
      <Textarea
        required
        ref={textareaRef}
        defaultValue={chapterContent.lessons.join("\n")}
      />
    </div>
  );
};

export default EditButtonComponentBodyChapter;
