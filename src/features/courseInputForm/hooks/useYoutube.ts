import { getVideo } from "@/configs/youtube";
import { setChapterVideo } from "@/state/slices/chapterSlice";
import { RootState } from "@/state/store";
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
      console.log("Fetched YouTube Videos:", videoIds); // Debug log

      dispatch(setChapterVideo(videoIds));
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
  };
};

export default useYoutube;
