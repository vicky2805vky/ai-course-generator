import { image } from "@/components/searchImage/types";
import {
  chapterType,
  courseOutlineType,
} from "@/types/courseOutlineSliceTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: courseOutlineType = {
  courseTitle: "",
  courseDescription: "",
  category: "",
  chapters: [],
  level: "",
  totalDuration: "",
  courseImage: {
    url: "/placeholder.webp",
    alt: "placeholder image",
  },
  youtubeQueries: [],
};

const courseOutlineSlice = createSlice({
  name: "courseOutline",
  initialState,
  reducers: {
    setCourseOutline: (state, action: PayloadAction<courseOutlineType>) => {
      return { ...state, ...action.payload };
    },
    setOutlineField: (
      state: courseOutlineType,
      action: PayloadAction<{
        key: keyof courseOutlineType;
        value: string | chapterType;
      }>,
    ) => {
      const { key, value } = action.payload;
      if (typeof value !== "string") {
        const filteredChapters = state.chapters.filter(
          (chapter) => chapter.chapterNumber !== value.chapterNumber,
        );
        const updatedChapters = [...filteredChapters, value];
        state.chapters = updatedChapters.sort(
          (a, b) => a.chapterNumber - b.chapterNumber,
        );
      } else if (
        key !== "chapters" &&
        key !== "courseImage" &&
        key !== "youtubeQueries"
      ) {
        state[key] = value;
      }
    },
    setCourseImage: (state, action: PayloadAction<image>) => {
      console.log(action.payload);
      console.log(action.payload.url === initialState.courseImage.url);
      console.log(action.payload.alt === initialState.courseImage.alt);
      if (
        action.payload.url === initialState.courseImage.url &&
        action.payload.alt === initialState.courseImage.alt
      ) {
        state.courseImage = {
          url: "/placeholder.webp",
          alt: "placeholder image",
        };
      } else {
        state.courseImage = action.payload;
      }
    },
    resetCourseOutline: () => initialState,
  },
});

export const {
  setCourseOutline,
  setOutlineField,
  resetCourseOutline,
  setCourseImage,
} = courseOutlineSlice.actions;
export default courseOutlineSlice.reducer;
