import CourseOutlineHeader from "./components/CourseOutlineHeader";
import CourseDetailBanner from "./components/CourseDetailBanner";
import CourseOutlineChapters from "./components/CourseOutlineChapters";
import CourseOutlineButtons from "./components/CourseOutlineButtons";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const CourseOutline = () => {
  const courseOutlineData = useSelector(
    (store: RootState) => store.courseOutline,
  );
  return (
    <div className="space-y-5">
      <CourseOutlineHeader
        title={courseOutlineData.courseTitle}
        description={courseOutlineData.courseDescription}
      />

      <CourseDetailBanner
        chapters={courseOutlineData.chapters.length}
        duration={courseOutlineData.totalDuration}
        level={courseOutlineData.level}
      />
      <CourseOutlineChapters chapters={courseOutlineData.chapters} />
      <CourseOutlineButtons />
    </div>
  );
};

export default CourseOutline;
