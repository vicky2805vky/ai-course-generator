import { configureStore } from "@reduxjs/toolkit";
import courseFormSlice from "@/services/slices/courseFormSlice";
import courseOutlineSlice from "@/services/slices/courseOutlineSlice";
import chapterSlice from "@/services/slices/chapterSlice";

export const store = configureStore({
  reducer: {
    courseForm: courseFormSlice,
    courseOutline: courseOutlineSlice,
    chapters: chapterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
