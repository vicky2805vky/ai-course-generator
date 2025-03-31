import useYoutube from "@/features/courseInputForm/hooks/useYoutube";
import useGenerateChapters from "./useGenerateChapters";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/services/store";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { setCourse } from "@/services/api/courseApi";
import { resetChapters } from "@/services/slices/chapterSlice";
import { resetCourseOutline } from "@/services/slices/courseOutlineSlice";
import { courseStateType } from "@/types/courseSliceTypes";

const useCreateCourse = () => {
  const courseOutline = useSelector((store: RootState) => store.courseOutline);
  const { courseTitle, chapters } = courseOutline;
  const courseChapters = useSelector((store: RootState) => store.chapters);
  const generateChapters = useGenerateChapters();
  const getYoutube = useYoutube();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [courseGenerated, setCourseGenerated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (!courseGenerated) return;
    const courseData: courseStateType = {
      id: id!,
      ownerId: user!.id,
      courseTitle,
      courseDescription: courseOutline.courseDescription,
      level: courseOutline.level,
      category: courseOutline.category,
      totalDuration: courseOutline.totalDuration,
      chapters: courseChapters,
      courseImage: courseOutline.courseImage,
    };
    dispatch(setCourse(courseData));
    dispatch(resetCourseOutline());
    dispatch(resetChapters());
  }, [courseGenerated]);

  const createCourse = async () => {
    setLoading(true);
    await generateChapters(courseTitle, chapters);
    await getYoutube();
    setCourseGenerated(true);
    setLoading(false);
    navigate(`/course/${id}/success`);
  };

  return {
    loading,
    createCourse,
  };
};

export default useCreateCourse;
