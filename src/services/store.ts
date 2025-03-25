import { configureStore } from "@reduxjs/toolkit";
import courseFormSlice from "@/services/slices/courseFormSlice";
import courseOutlineSlice from "@/services/slices/courseOutlineSlice";
import chapterSlice from "@/services/slices/chapterSlice";
import courseSlice from "@/services/slices/courseSlice";

export const store = configureStore({
  reducer: {
    courseForm: courseFormSlice,
    courseOutline: courseOutlineSlice,
    chapters: chapterSlice,
    course: courseSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
