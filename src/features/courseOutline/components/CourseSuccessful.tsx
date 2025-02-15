import { Button } from "@/components/ui/button";
import { FaShareFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CourseSuccessful = () => {
  return (
    <div className="flex flex-col gap-5">
      <h6 className="text-2xl font-bold">Course Created Successfully</h6>
      <div className="flex flex-wrap gap-5">
        <img
          src="/placeholder.webp"
          alt="placeholder"
          className="w-3/12 min-w-[200px] rounded-lg"
        />
        <ul className="">
          <li>
            <b>Title:</b>
          </li>
          <li>
            <b>Duration:</b>
          </li>
          <li>
            <b>Level:</b>
          </li>
          <li>
            <b>Chapters:</b>
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <Link to={"/course/courseId"}>
          <Button>view course</Button>
        </Link>
        <Button>
          share <FaShareFromSquare />
        </Button>
      </div>
    </div>
  );
};

export default CourseSuccessful;
