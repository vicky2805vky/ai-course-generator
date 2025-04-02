import { PRIMARY_BG } from "@/constants/tailwindConstants";
import { RootState } from "@/services/store";
import { BsBarChartLineFill } from "react-icons/bs";
import { FaBook, FaClock } from "react-icons/fa";
import { useSelector } from "react-redux";

const CourseDetailBanner = () => {
  const { chapters, totalDuration, level } = useSelector(
    (store: RootState) => store.courseOutline,
  );
  const bannerElements = [
    {
      Icon: BsBarChartLineFill,
      label: (
        <>
          <b>level: </b>
          {level}
        </>
      ),
    },
    {
      Icon: FaClock,
      label: (
        <>
          <b>duration: </b>
          {totalDuration}
        </>
      ),
    },
    {
      Icon: FaBook,
      label: (
        <>
          <b>chapters: </b>
          {chapters.length}
        </>
      ),
    },
  ];
  return (
    <div className={PRIMARY_BG + "flex flex-wrap justify-around py-3"}>
      {bannerElements.map((element, i) => {
        return (
          <div key={i} className="flex items-center gap-2">
            <span className="rounded-full bg-primary p-2 text-xs text-primary-foreground md:p-3">
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
