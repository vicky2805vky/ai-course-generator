import axios from "axios";

const UNSPLASH_BASE_URL = "https://api.unsplash.com/";

export const getImages = async (query: string) => {
  if (!query) return;

  try {
    const response = await axios.get(
      `${UNSPLASH_BASE_URL}/search/photos?query=${query}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
