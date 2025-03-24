import CourseChapterCard from "./CourseChapterCard";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";

const CourseOutlineChapters = () => {
  const { chapters } = useSelector((store: RootState) => store.courseOutline);
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
