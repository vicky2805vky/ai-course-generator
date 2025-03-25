import LoadingDialog from "@/components/LoadingDialog";
import { Button } from "@/components/ui/button";
import useYoutube from "@/features/courseInputForm/hooks/useYoutube";
import useGenerateChapters from "@/features/courseOutline/hooks/useGenerateChapters";
import { setCourse } from "@/services/api/courseApi";
import { AppDispatch, RootState } from "@/services/store";
import { courseStateType } from "@/types/courseSliceTypes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { resetCourseOutline } from "@/services/slices/courseOutlineSlice";
import { resetChapters } from "@/services/slices/chapterSlice";
import useCreateCourse from "../hooks/useCreateCourse";

const CourseOutlineButtons = () => {
  // const courseOutline = useSelector((store: RootState) => store.courseOutline);
  // const { courseTitle, chapters } = courseOutline;
  // const chapterContent = useSelector(
  //   (store: RootState) => store.chapters.chapterContent,
  // );
  // const courseChapters = useSelector((store: RootState) => store.chapters);
  // const generateChapters = useGenerateChapters();
  // const getYoutube = useYoutube();
  // const navigate = useNavigate();
  // const dispatch = useDispatch<AppDispatch>();
  // const { user } = useUser();
  // const [loading, setLoading] = useState(false);
  // const [courseGenerated, setCourseGenerated] = useState(false);
  // const { id } = useParams();

  // useEffect(() => {
  //   if (!courseGenerated) return;
  //   const courseData: courseStateType = {
  //     id: id!,
  //     ownerId: user!.id,
  //     courseTitle,
  //     courseDescription: courseOutline.courseDescription,
  //     level: courseOutline.level,
  //     category: courseOutline.category,
  //     totalDuration: courseOutline.totalDuration,
  //     chapters: courseChapters,
  //   };
  //   dispatch(setCourse(courseData));
  //   dispatch(resetCourseOutline());
  //   dispatch(resetChapters());
  // }, [courseGenerated]);
  const chapterContent = useSelector(
    (store: RootState) => store.chapters.chapterContent,
  );
  const chapters = useSelector(
    (store: RootState) => store.courseOutline.chapters,
  );
  const { loading, createCourse } = useCreateCourse();
  return (
    <div className="flex justify-between">
      <Button>Cancel</Button>
      <Button onClick={createCourse}>Generate</Button>
      <LoadingDialog
        open={loading}
        title={`${chapterContent.length} out of ${chapters.length} chapters created`}
      />
    </div>
  );
};

export default CourseOutlineButtons;
