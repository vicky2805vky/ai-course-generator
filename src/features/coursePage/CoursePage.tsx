import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { RootState } from "@/state/store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Markdown from "markdown-to-jsx";
import Youtube from "react-youtube";

const CoursePage = () => {
  const chapters = useSelector(
    (store: RootState) => store.chapters.chapterContent,
  );
  const videoIds = useSelector((store: RootState) => store.chapters.videoIds);
  const [currentChapter, setCurrentChapter] = useState(0);
  useEffect(() => {
    console.log(videoIds);

    window.scrollTo(0, 0);
  }, [currentChapter]);
  return (
    <div className="space-y-5" key={currentChapter}>
      {/* <SidebarTrigger /> */}
      <h6 id="title" className="overflow-hidden text-2xl font-bold">
        Chapter {currentChapter + 1} : {chapters[currentChapter].chapterName}
      </h6>
      <Youtube
        videoId={videoIds[currentChapter]}
        className="mx-auto my-10 w-10/12 min-w-[250px] rounded-lg"
      />

      {chapters[currentChapter].lessons.map((lesson, i) => {
        return (
          <div className="space-y-3" key={i}>
            <h6 className="text-xl font-bold">{lesson.lessonTitle}</h6>
            <Markdown className="overflow-hidden text-justify [&_*]:[line-height:2.5] [&_li]:list-inside [&_li]:list-disc">
              {lesson.lessonContent}
            </Markdown>
            {lesson.codeExample ? (
              <>
                <h6 className="text-lg font-bold">Example</h6>

                <Markdown>{lesson.codeExample}</Markdown>
              </>
            ) : (
              ""
            )}
          </div>
        );
      })}
      <div className="flex items-center justify-between">
        <Button
          disabled={currentChapter === 0}
          onClick={() => {
            setCurrentChapter(currentChapter - 1);
          }}
        >
          <ChevronLeft /> Previous
        </Button>
        <Button
          disabled={currentChapter === chapters.length - 1}
          onClick={() => {
            setCurrentChapter(currentChapter + 1);
          }}
        >
          Next <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default CoursePage;
