import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import { RootState } from "@/services/store";
import { useUser } from "@clerk/clerk-react";

const YourCourses = () => {
  const courses = useSelector((state: RootState) => state.course);
  const { user } = useUser();
  const yourCourses = courses.filter((course) => course.ownerId === user?.id);

  if (!yourCourses.length) return <p>no courses</p>;
  return (
    <div className="flex snap-x snap-mandatory overflow-x-auto">
      {yourCourses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default YourCourses;
