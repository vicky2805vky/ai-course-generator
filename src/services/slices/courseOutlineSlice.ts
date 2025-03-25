import { courseOutlineType } from "@/types/courseOutlineSliceTypes";
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
      state.courseTitle = action.payload.courseTitle;
      state.courseDescription = action.payload.courseDescription;
      state.category = action.payload.category;
      state.chapters = action.payload.chapters;
      state.level = action.payload.level;
      state.totalDuration = action.payload.totalDuration;
    },
    resetCourseOutline: () => {
      return initialState;
    },
  },
});

export const { setCourseOutline, resetCourseOutline } =
  courseOutlineSlice.actions;
export default courseOutlineSlice.reducer;
