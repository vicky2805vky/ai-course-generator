import useScrollToTop from "./hooks/useScrollToTop";
import CoursePageVideo from "./components/CoursePage/CoursePageVideo";
import CoursePageBody from "./components/CoursePage/CoursePageBody";
import CoursePageNavButtons from "./components/CoursePage/CoursePageNavButtons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { resetChapters, setChapterState } from "@/services/slices/chapterSlice";
import { courseStateType } from "@/types/courseSliceTypes";

const CoursePage = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  useScrollToTop(currentChapter);
  const courses = useSelector((store: RootState) => store.course);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [course, setCourse] = useState<courseStateType>();
  useEffect(() => {
    const selectedCourse = courses.find((course) => course.id === id);
    setCourse(selectedCourse);
    if (!selectedCourse) return;
    dispatch(setChapterState(selectedCourse.chapters));
    return () => {
      dispatch(resetChapters());
    };
  }, []);
  if (!course?.chapters.chapterContent.length) return null;
  return (
    <div className="space-y-5" key={currentChapter}>
      <CoursePageVideo currentChapter={currentChapter} />
      <CoursePageBody currentChapter={currentChapter} />
      <CoursePageNavButtons
        currentChapter={currentChapter}
        setCurrentChapter={setCurrentChapter}
      />
    </div>
  );
};

export default CoursePage;
