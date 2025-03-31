import LoadingDialog from "@/components/LoadingDialog";
import { Button } from "@/components/ui/button";

import { RootState } from "@/services/store";

import { useDispatch, useSelector } from "react-redux";

import useCreateCourse from "../hooks/useCreateCourse";
import { useNavigate } from "react-router-dom";
import { resetCourseOutline } from "@/services/slices/courseOutlineSlice";
import { Progress } from "@/components/ui/progress";

const CourseOutlineButtons = () => {
  const chapterContent = useSelector(
    (store: RootState) => store.chapters.chapterContent,
  );
  const chapters = useSelector(
    (store: RootState) => store.courseOutline.chapters,
  );
  const { loading, createCourse } = useCreateCourse();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between">
      <Button
        onClick={() => {
          dispatch(resetCourseOutline());
          navigate("/home");
        }}
      >
        Cancel
      </Button>
      <Button onClick={createCourse}>Generate</Button>
      <LoadingDialog
        open={loading}
        title={`${chapterContent.length} out of ${chapters.length} chapters created`}
      >
        <Progress value={(chapterContent.length / chapters.length) * 100} />
      </LoadingDialog>
    </div>
  );
};

export default CourseOutlineButtons;
