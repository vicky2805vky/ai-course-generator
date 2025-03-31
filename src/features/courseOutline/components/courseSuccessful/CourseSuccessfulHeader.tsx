import { courseStateType } from "@/types/courseSliceTypes";

const CourseSuccessfulHeader = ({ course }: { course: courseStateType }) => {
  return (
    <>
      <h6 className="text-2xl font-bold">Course Created Successfully</h6>
      <div className="flex flex-wrap gap-5">
        <img
          src={course.courseImage.url}
          alt={course.courseImage.alt}
          className="mx-auto aspect-video w-6/12 min-w-[200px] rounded-lg object-cover"
        />
      </div>
    </>
  );
};

export default CourseSuccessfulHeader;
