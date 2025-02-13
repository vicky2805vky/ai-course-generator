import CourseOutlineHeader from "./components/CourseOutlineHeader";
import CourseDetailBanner from "./components/CourseDetailBanner";
import CourseOutlineChapters from "./components/CourseOutlineChapters";
import CourseOutlineButtons from "./components/CourseOutlineButtons";

const CourseOutline = () => {
  return (
    <div className="space-y-5">
      <CourseOutlineHeader />
      <CourseDetailBanner />
      <CourseOutlineChapters />
      <CourseOutlineButtons />
    </div>
  );
};

export default CourseOutline;
