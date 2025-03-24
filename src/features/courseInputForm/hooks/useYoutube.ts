import { getVideo } from "@/configs/youtube";
import { setChapterVideo } from "@/services/slices/chapterSlice";
import { RootState } from "@/services/store";
import { useDispatch, useSelector } from "react-redux";

const useYoutube = () => {
  const chapters = useSelector(
    (store: RootState) => store.courseOutline.chapters,
  );
  const courseTopic = useSelector((store: RootState) => store.courseForm.topic);
  const dispatch = useDispatch();

  return async () => {
    try {
      const videoPromises = chapters.map((chapter) =>
        getVideo(`${courseTopic} ${chapter.chapterName}`),
      );
      const videoIds = await Promise.all(videoPromises);
      dispatch(setChapterVideo(videoIds));
    } catch (error) {
      console.error("Failed to fetch YouTube videos:", error);
    }
  };
};

export default useYoutube;
