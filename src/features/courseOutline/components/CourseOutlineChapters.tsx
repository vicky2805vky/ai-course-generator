import { chapterType } from "@/state/slices/courseOutlineSlice";
import CourseChapterCard from "./CourseChapterCard";
type courseOutlineChaptersProps = {
  chapters: chapterType[];
};
const CourseOutlineChapters = ({ chapters }: courseOutlineChaptersProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold">Chapters</h3>
      <div className="flex flex-col gap-3">
        {chapters.map((chapter) => {
          return (
            <CourseChapterCard key={chapter.chapterNumber} chapter={chapter} />
          );
        })}
      </div>
    </div>
  );
};

export default CourseOutlineChapters;
