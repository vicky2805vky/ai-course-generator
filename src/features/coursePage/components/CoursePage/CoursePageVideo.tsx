import { RootState } from "@/state/store";
import Plyr from "plyr-react";
import { useSelector } from "react-redux";

import "plyr-react/plyr.css";

const CoursePageVideo = ({ currentChapter }: { currentChapter: number }) => {
  const chapters = useSelector(
    (store: RootState) => store.chapters.chapterContent,
  );
  const videoIds = useSelector((store: RootState) => store.chapters.videoIds);
  return (
    <>
      <h6 id="title" className="overflow-hidden text-2xl font-bold">
        Chapter {currentChapter + 1} : {chapters[currentChapter].chapterName}
      </h6>
      <Plyr
        source={{
          type: "video",
          sources: [{ src: videoIds[currentChapter], provider: "youtube" }],
        }}
      />
    </>
  );
};

export default CoursePageVideo;
