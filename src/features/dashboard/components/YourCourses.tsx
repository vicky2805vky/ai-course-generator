import CourseCard from "./CourseCard";

const YourCourses = () => {
  return (
    <div className="flex snap-x snap-mandatory overflow-x-auto">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
};

export default YourCourses;
