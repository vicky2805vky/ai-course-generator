import EditButtonComponent from "@/components/EditButtonComponent";
import { GLASSMORPH_BG } from "@/constants/tailwindConstants";
import { chapterType } from "@/state/slices/courseOutlineSlice";
import { FaCheck, FaRegClock } from "react-icons/fa";

const CourseChapterCard = ({ chapter }: { chapter: chapterType }) => {
  return (
    <div
      className={
        GLASSMORPH_BG +
        "flex flex-col justify-around gap-3 rounded-lg p-3 md:flex-row md:items-center"
      }
    >
      <p className="hidden size-7 place-content-center rounded-full bg-primary p-3 text-xs md:grid">
        {chapter.chapterNumber}
      </p>
      <div className="flex items-center gap-3 md:hidden">
        <p className="grid size-7 place-content-center rounded-full bg-primary p-3 text-xs">
          {chapter.chapterNumber}
        </p>
        <EditButtonComponent>
          <h6 className="font-bold">{chapter.chapterName}</h6>
        </EditButtonComponent>
      </div>
      <div className="flex flex-col gap-3">
        <EditButtonComponent className="hidden font-bold md:flex">
          <h6 className="">{chapter.chapterName}</h6>
        </EditButtonComponent>
        <p className="text-xs md:text-sm">{chapter.chapterDescription}</p>
        <div className="flex items-center justify-between text-xs md:text-sm">
          <p className="flex items-center gap-3">
            <FaRegClock /> {chapter.chapterDuration}
          </p>
          <div className="rounded-full bg-gray-400 p-2 md:hidden">
            <FaCheck />
          </div>
        </div>
      </div>
      <div className="hidden rounded-full bg-gray-400 p-2 md:block">
        <FaCheck />
      </div>
    </div>
  );
};

export default CourseChapterCard;
