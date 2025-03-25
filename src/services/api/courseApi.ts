import { courseStateType } from "@/types/courseSliceTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCourses = createAsyncThunk(
  "course/get",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(import.meta.env.VITE_JSON_SERVER_URL);
      return response.data as courseStateType[];
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  },
);
export const setCourse = createAsyncThunk(
  "course/post",
  async (course: courseStateType, thunkApi) => {
    try {
      await axios.post(import.meta.env.VITE_JSON_SERVER_URL, course);
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
      await axios.delete(import.meta.env.VITE_JSON_SERVER_URL + `/${id}`);
      return id;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  },
);
