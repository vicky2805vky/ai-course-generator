import { RootState } from "@/services/store";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type coursePageNavButtonsProps = {
  currentChapter: number;
  setCurrentChapter: React.Dispatch<React.SetStateAction<number>>;
};

const CoursePageNavButtons = ({
  currentChapter,
  setCurrentChapter,
}: coursePageNavButtonsProps) => {
  const chapters = useSelector(
    (store: RootState) => store.chapters.chapterContent,
  );
  return (
    <div className="flex items-center justify-between">
      <Button
        disabled={currentChapter === 0}
        onClick={() => {
          setCurrentChapter(currentChapter - 1);
        }}
      >
        <ChevronLeft /> Previous
      </Button>
      <Button
        disabled={currentChapter === chapters.length - 1}
        onClick={() => {
          setCurrentChapter(currentChapter + 1);
        }}
      >
        Next <ChevronRight />
      </Button>
    </div>
  );
};

export default CoursePageNavButtons;
