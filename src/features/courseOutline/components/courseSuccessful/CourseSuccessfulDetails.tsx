import { courseStateType } from "@/types/courseSliceTypes";

const CourseSuccessfulDetails = ({ course }: { course: courseStateType }) => {
  const courseDetailList = [
    {
      heading: "Title",
      body: course.courseTitle,
    },
    {
      heading: "Duration",
      body: course.totalDuration,
    },
    {
      heading: "Level",
      body: course.level,
    },
    {
      heading: "Total chapters",
      body: course.chapters.chapterContent.length,
    },
  ];
  return (
    <ul className="space-y-5">
      {courseDetailList.map((courseDetail, i) => (
        <li key={i} className="flex justify-between [&>*]:flex-1">
          <b className="text-lg">{courseDetail.heading}</b>
          <b>:</b>
          <p className="">{courseDetail.body}</p>
        </li>
      ))}
    </ul>
  );
};
export default CourseSuccessfulDetails;
