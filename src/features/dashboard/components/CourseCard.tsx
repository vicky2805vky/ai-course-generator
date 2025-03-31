import { PRIMARY_BG } from "@/constants/tailwindConstants";
import { courseStateType } from "@/types/courseSliceTypes";
import CourseCardHeader from "./courseCard/CourseCardHeader";
import CourseCardTags from "./courseCard/CourseCardTags";
import CourseCardDetails from "./courseCard/CourseCardDetails";
import CourseCardButtons from "./courseCard/CourseCardButtons";

const CourseCard = (props: courseStateType) => {
  const {
    id,
    courseTitle,
    totalDuration,
    level,
    category,
    chapters,
    courseImage,
  } = props;
  return (
    <div
      className={` ${PRIMARY_BG}flex min-w-[250px] max-w-[300px] scale-90 snap-center flex-col justify-between gap-5 rounded-lg p-5 [&>div]:flex [&>div]:items-center [&>div]:justify-between`}
    >
      <CourseCardHeader courseTitle={courseTitle} courseImage={courseImage} />
      <CourseCardTags tags={[category, level]} />
      <CourseCardDetails
        duration={totalDuration}
        Totalchapters={chapters.chapterContent.length}
      />
      <CourseCardButtons id={id} />
    </div>
  );
};

export default CourseCard;
