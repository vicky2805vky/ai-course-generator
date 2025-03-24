import LoadingDialog from "@/components/LoadingDialog";
import { Button } from "@/components/ui/button";
import useYoutube from "@/features/courseInputForm/hooks/useYoutube";
import useGenerateChapters from "@/features/courseOutline/hooks/useGenerateChapters";
import { RootState } from "@/services/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CourseOutlineButtons = () => {
  const { courseTitle, chapters } = useSelector(
    (store: RootState) => store.courseOutline,
  );
  const chapterContent = useSelector(
    (store: RootState) => store.chapters.chapterContent,
  );
  const generateChapters = useGenerateChapters();
  const getYoutube = useYoutube();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex justify-between">
      <Button>Cancel</Button>
      <Button
        onClick={async () => {
          setLoading(true);
          await generateChapters(courseTitle, chapters);
          await getYoutube();
          setLoading(false);
          navigate("/course/id/success");
        }}
      >
        Generate
      </Button>
      <LoadingDialog
        open={loading}
        title={`${chapterContent.length} out of ${chapters.length} chapters created`}
      />
    </div>
  );
};

export default CourseOutlineButtons;
