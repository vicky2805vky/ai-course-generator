import { getVideo } from "@/configs/youtube";
import { setChapterVideo } from "@/services/slices/chapterSlice";
import { RootState } from "@/services/store";
import { useDispatch, useSelector } from "react-redux";

const useYoutube = () => {
  const youtubeQueries = useSelector(
    (store: RootState) => store.courseOutline.youtubeQueries,
  );
  const dispatch = useDispatch();

  return async () => {
    try {
      const videoPromises = youtubeQueries.map((query) => getVideo(query));
      const videoIds = await Promise.all(videoPromises);
      dispatch(setChapterVideo(videoIds));
    } catch (error) {
      console.error("Failed to fetch YouTube videos:", error);
    }
  };
};

export default useYoutube;
