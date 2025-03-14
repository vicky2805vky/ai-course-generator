import { RootState } from "@/state/store";
import Markdown from "markdown-to-jsx";
import { useSelector } from "react-redux";
import CoursePageCodeExample from "./CoursePageCodeExample";

const CoursePageBody = ({ currentChapter }: { currentChapter: number }) => {
  const chapters = useSelector(
    (store: RootState) => store.chapters.chapterContent,
  );
  return chapters[currentChapter].lessons.map((lesson, i) => {
    return (
      <div className="space-y-3" key={i}>
        <h6 className="text-xl font-bold">{lesson.lessonTitle}</h6>
        <Markdown className="space-y-3 overflow-hidden text-justify [&_*]:[line-height:2.5] [&_li]:list-inside [&_li]:list-disc">
          {lesson.lessonContent.replace(/\\n/g, "\n")}
        </Markdown>
        <CoursePageCodeExample codeExample={lesson.codeExample} />
      </div>
    );
  });
};

export default CoursePageBody;
