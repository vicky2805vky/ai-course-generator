import { image } from "@/components/searchImage/types";

export type chapterType = {
  chapterNumber: number;
  chapterName: string;
  chapterDuration: string;
  lessons: string[];
};

export type courseOutlineType = {
  courseTitle: string;
  courseDescription: string;
  category: string;
  level: string;
  totalDuration: string;
  chapters: chapterType[];
  courseImage: image;
  youtubeQueries: string[];
};
