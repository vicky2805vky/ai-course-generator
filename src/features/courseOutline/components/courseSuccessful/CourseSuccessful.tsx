import { RootState } from "@/services/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CourseSuccessfulHeader from "./CourseSuccessfulHeader";
import CourseSuccessfulDetails from "./CourseSuccessfulDetails";
import CourseSuccessfulButtons from "./CourseSuccessfulButtons";

const CourseSuccessful = () => {
  const { id } = useParams();
  const allCourses = useSelector((store: RootState) => store.course);

  const filteredCourse = allCourses.find((course) => course.id === id);
  if (!filteredCourse || !id) return null;
  return (
    <div className="flex flex-col gap-10">
      <CourseSuccessfulHeader course={filteredCourse} />
      <CourseSuccessfulDetails course={filteredCourse} />
      <CourseSuccessfulButtons id={id} />
    </div>
  );
};

export default CourseSuccessful;
