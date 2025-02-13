import EditButtonComponent from "@/components/EditButtonComponent";
import { GLASSMORPH_BG } from "@/constants/tailwindConstants";
import { FaCheck, FaRegClock } from "react-icons/fa";

const CourseChapterCard = () => {
  return (
    <div
      className={
        GLASSMORPH_BG +
        "flex flex-col justify-around gap-3 rounded-lg p-3 md:flex-row md:items-center"
      }
    >
      <p className="hidden size-7 place-content-center rounded-full bg-primary p-3 text-xs md:grid">
        1
      </p>
      <div className="flex items-center gap-3 md:hidden">
        <p className="grid size-7 place-content-center rounded-full bg-primary p-3 text-xs">
          1
        </p>
        <EditButtonComponent>
          <h6 className="font-bold">chapter name</h6>
        </EditButtonComponent>
      </div>
      <div className="flex flex-col gap-3">
        <EditButtonComponent className="hidden font-bold md:flex">
          <h6 className="">chapter name</h6>
        </EditButtonComponent>
        <p className="text-xs md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, et
          quibusdam! Officiis illum delectus obcaecati distinctio id, voluptatem
          sapiente labore?
        </p>
        <div className="flex items-center justify-between text-xs md:text-sm">
          <p className="flex items-center gap-3">
            <FaRegClock /> 30 minutes
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
