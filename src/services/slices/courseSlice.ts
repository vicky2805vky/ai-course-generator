import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCourse,
  getCourses,
  setCourse,
  updateCourse,
} from "../api/courseApi";
import { courseStateType } from "@/types/courseSliceTypes";
import { toast } from "sonner";

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
        if (action.payload) state.push(action.payload);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        if (action.payload) {
          const filteredCourses = state.filter(
            (course) => course.id !== action.payload?.id,
          );
          toast("course updated successfully!");
          return [...filteredCourses, action.payload];
        }
      })
      .addCase(updateCourse.rejected, (_, action) => {
        toast(
          "An error occured while updating course, check console for more details",
        );
        console.error(action.payload);
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        toast("course deleted successfully");
        return state.filter((course) => course.id !== action.payload);
      })
      .addCase(deleteCourse.rejected, (_, action) => {
        toast(
          "An error occured while deleting course, check console for more details",
        );
        console.error(action.payload);
      });
  },
});

export default courseSlice.reducer;
