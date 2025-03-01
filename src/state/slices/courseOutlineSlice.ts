import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
};

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
      state.courseTitle = action.payload.courseTitle;
      state.courseDescription = action.payload.courseDescription;
      state.category = action.payload.category;
      state.chapters = action.payload.chapters;
      state.level = action.payload.level;
      state.totalDuration = action.payload.totalDuration;
    },
  },
});

export const { setCourseOutline } = courseOutlineSlice.actions;
export default courseOutlineSlice.reducer;
