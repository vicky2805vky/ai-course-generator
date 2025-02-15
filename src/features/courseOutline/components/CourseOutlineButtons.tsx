import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CourseOutlineButtons = () => {
  return (
    <div className="flex justify-between">
      <Button>Cancel</Button>
      <Link to={"/course/courseId/success"}>
        <Button>Generate </Button>
      </Link>
    </div>
  );
};

export default CourseOutlineButtons;
