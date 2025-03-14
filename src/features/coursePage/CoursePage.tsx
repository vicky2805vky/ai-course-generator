import useScrollToTop from "./hooks/useScrollToTop";
import CoursePageVideo from "./components/CoursePage/CoursePageVideo";
import CoursePageBody from "./components/CoursePage/CoursePageBody";
import CoursePageNavButtons from "./components/CoursePage/CoursePageNavButtons";
import { useState } from "react";

const CoursePage = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  useScrollToTop(currentChapter);
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
