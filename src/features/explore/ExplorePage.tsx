import { RootState } from "@/services/store";
import { useSelector } from "react-redux";
import CourseCard from "../dashboard/components/CourseCard";

const ExplorePage = () => {
  const courses = useSelector((state: RootState) => state.course);
  if (!courses.length) return <p>No courses</p>;
  return (
    <div className="flex flex-wrap justify-around gap-5">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default ExplorePage;
