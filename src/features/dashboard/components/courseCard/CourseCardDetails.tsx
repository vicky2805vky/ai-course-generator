import { LuBookOpen } from "react-icons/lu";
import { TbClock } from "react-icons/tb";

const CourseCardDetails = ({
  duration,
  Totalchapters,
}: {
  duration: string;
  Totalchapters: number;
}) => {
  return (
    <div className="text-sm md:text-base">
      <p className="flex items-center gap-3">
        <TbClock /> {duration}
      </p>
      <p className="flex items-center gap-3">
        <LuBookOpen /> {Totalchapters} chapters
      </p>
    </div>
  );
};
export default CourseCardDetails;
