import { GLASSMORPH_BG } from "@/constants/tailwindConstants";
import { BsBarChartLineFill } from "react-icons/bs";
import { FaBook, FaClock } from "react-icons/fa";

const bannerElements = [
  {
    Icon: BsBarChartLineFill,
    label: "level",
  },
  {
    Icon: FaClock,
    label: "duration",
  },
  {
    Icon: FaBook,
    label: "chapters",
  },
];

const CourseDetailBanner = () => {
  return (
    <div
      className={
        GLASSMORPH_BG + "flex flex-wrap justify-around rounded-full py-3"
      }
    >
      {bannerElements.map((element, i) => {
        return (
          <div key={i} className="flex items-center gap-2">
            <span className="rounded-full bg-primary p-2 text-xs md:p-3">
              <element.Icon />
            </span>
            <p className="text-xs md:text-base">{element.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CourseDetailBanner;
