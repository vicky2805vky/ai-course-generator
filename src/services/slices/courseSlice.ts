import { createSlice } from "@reduxjs/toolkit";
import { deleteCourse, getCourses, setCourse } from "../api/courseApi";
import { courseStateType } from "@/types/courseSliceTypes";

const initialState: courseStateType[] = [];

const courseSlice = createSlice({
  name: "courseOutline",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.fulfilled, (_, action) => {
        if (action.payload) {
          return action.payload;
        }
      })
      .addCase(setCourse.fulfilled, (state, action) => {
        action.payload && state.push(action.payload);
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        return state.filter((course) => course.id !== action.payload);
      });
  },
});

export const {} = courseSlice.actions;
export default courseSlice.reducer;
