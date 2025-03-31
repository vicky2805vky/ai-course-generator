import { getImages } from "@/configs/unsplash";
import { image } from "../types";

export const fetchImages = async (
  searchQuery: string,
  currentPage: number,
  setImages: React.Dispatch<image[]>,
  setTotalPages: React.Dispatch<number>,
) => {
  const imagesData = await getImages(searchQuery, currentPage);
  if (!imagesData) {
    setImages([]);
    return;
  }
  const galleryImages = imagesData.results.map((imageData): image => {
    return { url: imageData.urls.small, alt: imageData.slug };
  });

  setImages(galleryImages);
  setTotalPages(imagesData.total_pages);
};
