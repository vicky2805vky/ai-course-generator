import { Button } from "@/components/ui/button";
import CourseCardMenu from "../CourseCardMenu";
import { useNavigate } from "react-router-dom";

const CourseCardButtons = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  return (
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
  );
};

export default CourseCardButtons;
