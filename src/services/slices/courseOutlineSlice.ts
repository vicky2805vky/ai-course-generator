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
        const updatedChapters = state.chapters.filter(
          (chapter) => chapter.chapterNumber !== value.chapterNumber,
        );
        state.chapters = [...updatedChapters, value];
      } else if (key !== "chapters") {
        state[key] = value;
      }
    },
    resetCourseOutline: () => initialState,
  },
});

export const { setCourseOutline, setOutlineField, resetCourseOutline } =
  courseOutlineSlice.actions;
export default courseOutlineSlice.reducer;
