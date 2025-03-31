import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CourseSuccessfulButtons = ({ id }: { id: string }) => {
  return (
    <div className="flex justify-between gap-5">
      <Button
        onClick={() => {
          navigator.clipboard.writeText(
            window.location.host +
              window.location.pathname.replace("success", ""),
          );
          toast("link copied");
        }}
      >
        copy link
      </Button>
      <Link to={`/course/${id}`}>
        <Button>view course</Button>
      </Link>
    </div>
  );
};
export default CourseSuccessfulButtons;
