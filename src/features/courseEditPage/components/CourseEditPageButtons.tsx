import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type courseEditPageButtonsProps = {
  editCourse: () => void;
};

const CourseEditPageButtons = ({ editCourse }: courseEditPageButtonsProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-3">
      <Button
        variant="destructive"
        onClick={() => {
          navigate("/home");
        }}
      >
        Cancel
      </Button>
      <Button onClick={editCourse}>Save</Button>
    </div>
  );
};

export default CourseEditPageButtons;
