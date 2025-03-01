import axios from "axios";

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";

export const getVideo = async (query: string) => {
  const params = {
    part: "snippet",
    maxResults: 1,
    videoDuration: "medium",
    q: query,
    type: "video",
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  };
  const res = await axios.get(YOUTUBE_BASE_URL + "/search", { params });
  return res.data.items[0].id.videoId;
};
