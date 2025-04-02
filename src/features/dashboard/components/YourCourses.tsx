import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import { RootState } from "@/services/store";
import { useUser } from "@clerk/clerk-react";

const YourCourses = () => {
  const courses = useSelector((state: RootState) => state.course);
  const { user } = useUser();
  const yourCourses = courses.filter((course) => course.ownerId === user?.id);

  if (!yourCourses.length)
    return (
      <div className="flex flex-col items-center justify-center">
        <img
          src="/empty.png"
          alt="a women looking at an empty cardboard box and exclaimed"
          className="w-4/12 min-w-[250px]"
        />
        <p className="text-xl font-bold md:text-2xl">
          you don't have any courses
        </p>
      </div>
    );
  return (
    <div className="flex snap-x snap-mandatory overflow-x-auto">
      {yourCourses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default YourCourses;
