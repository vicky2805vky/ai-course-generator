import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PRIMARY_BG } from "@/constants/tailwindConstants";
import CourseCardMenu from "./CourseCardMenu";
import { courseStateType } from "@/types/courseSliceTypes";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  id,
  courseTitle,
  totalDuration,
  level,
  category,
  chapters,
}: courseStateType) => {
  const navigate = useNavigate();
  return (
    <div
      className={
        PRIMARY_BG +
        "flex min-w-[250px] max-w-[300px] scale-90 snap-center flex-col justify-between gap-3 rounded-lg p-5 [&>div]:flex [&>div]:items-center [&>div]:justify-between"
      }
    >
      <img src="/placeholder.webp" alt="" className="mx-auto rounded-lg" />
      <h4 className="text-lg font-bold md:text-xl">{courseTitle}</h4>
      <div className="!justify-start gap-3">
        <CourseCardTags tag={category} />
        <CourseCardTags tag={level} />
      </div>
      <div className="text-sm md:text-base">
        <p>{totalDuration}</p>
        <p>{chapters.chapterContent.length} chapters</p>
      </div>
      <div className="text-sm md:text-base">
        <Progress value={70} className="h-3 w-3/6" />
        <p>70%</p>
      </div>
      <div className="flex gap-3 text-sm md:text-base">
        <Button
          size="sm"
          className="flex-1"
          onClick={() => {
            navigate(`/course/${id}`);
          }}
        >
          View
        </Button>
        <CourseCardMenu courseId={id} />
      </div>
    </div>
  );
};

export default CourseCard;

const CourseCardTags = ({ tag }: { tag: string }) => {
  return (
    <div>
      <p className="rounded-full bg-primary p-1 px-3 text-[10px]">{tag}</p>
    </div>
  );
};
