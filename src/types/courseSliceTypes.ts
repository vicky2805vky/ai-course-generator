import { image } from "@/components/searchImage/types";
import { chapterStateType } from "./chapterSliceTypes";

export type courseStateType = {
  id: string;
  ownerId: string;
  courseTitle: string;
  courseDescription: string;
  category: string;
  chapters: chapterStateType;
  level: string;
  totalDuration: string;
  courseImage: image;
};
