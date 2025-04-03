import { db } from "@/configs/db";
import { courseTable } from "@/schema/courseSchema";
import { courseStateType } from "@/types/courseSliceTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { eq } from "drizzle-orm";

export const getCourses = createAsyncThunk(
  "course/get",
  async (_, thunkApi) => {
    try {
      const response = await db.select().from(courseTable);
      return response;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  },
);
export const setCourse = createAsyncThunk(
  "course/post",
  async (course: courseStateType, thunkApi) => {
    try {
      await db.insert(courseTable).values(course);
      return course;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  },
);
export const updateCourse = createAsyncThunk(
  "course/update",
  async (course: courseStateType, thunkApi) => {
    try {
      await db
        .update(courseTable)
        .set(course)
        .where(eq(courseTable.id, course.id));
      return course;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  },
);
export const deleteCourse = createAsyncThunk(
  "course/delete",
  async (id: string, thunkApi) => {
    try {
      await db.delete(courseTable).where(eq(courseTable.id, id));
      return id;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  },
);
