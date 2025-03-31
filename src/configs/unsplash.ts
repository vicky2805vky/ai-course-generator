import axios from "axios";

const UNSPLASH_BASE_URL = "https://api.unsplash.com/";

type imageData = {
  total: number;
  total_pages: number;
  results: {
    slug: string;
    urls: {
      small: string;
    };
  }[];
};

export const getImages = async (query: string, page: number = 1) => {
  if (!query) return;

  try {
    const response = await axios.get<imageData>(
      `${UNSPLASH_BASE_URL}/search/photos?per_page=20&page=${page}&query=${query}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
