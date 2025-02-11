import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GLASSMORPH_BG } from "@/constants/tailwindConstants";
import CourseCardMenu from "./CourseCardMenu";

const CourseCard = () => {
  return (
    <div
      className={
        GLASSMORPH_BG +
        "min-w-[250px] max-w-[300px] scale-90 snap-center space-y-3 rounded-lg p-5 [&>div]:flex [&>div]:items-center [&>div]:justify-between"
      }
    >
      <img src="/placeholder.webp" alt="" className="mx-auto rounded-lg" />
      <h4 className="text-xl font-bold md:text-2xl">Title</h4>
      <CourseCardTags />
      <div className="text-sm md:text-base">
        <p>1 hour</p>
        <p>10 chapters</p>
      </div>
      <div className="text-sm md:text-base">
        <Progress value={70} className="h-3 w-3/6" />
        <p>70%</p>
      </div>
      <div className="flex gap-3 text-sm md:text-base">
        <Button size="sm" className="flex-1">
          Continue
        </Button>
        <CourseCardMenu />
      </div>
    </div>
  );
};

export default CourseCard;

const CourseCardTags = () => {
  return (
    <div>
      <p className="rounded-full bg-secondary p-1 px-3 text-[10px]">
        Programming
      </p>
    </div>
  );
};
