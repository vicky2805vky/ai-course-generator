import CourseChapterCard from "./CourseChapterCard";

const CourseOutlineChapters = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold">Chapters</h3>
      <div className="flex flex-col gap-3">
        <CourseChapterCard />
        <CourseChapterCard />
        <CourseChapterCard />
      </div>
    </div>
  );
};

export default CourseOutlineChapters;
