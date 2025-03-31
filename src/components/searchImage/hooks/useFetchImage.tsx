import { useEffect, useState } from "react";
import { fetchImages } from "../utils/fetchImages";
import { image } from "../types";

const useFetchImage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState<image[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!searchQuery) return;
    fetchImages(searchQuery, currentPage, setImages, setTotalPages);
  }, [currentPage, searchQuery]);

  return {
    setSearchQuery,
    currentPage,
    setCurrentPage,
    images,
    totalPages,
  };
};

export default useFetchImage;
