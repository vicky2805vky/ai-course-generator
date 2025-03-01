import { configureStore } from "@reduxjs/toolkit";
import courseFormSlice from "@/state/slices/courseFormSlice";
import courseOutlineSlice from "@/state/slices/courseOutlineSlice";
import chapterSlice from "@/state/slices/chapterSlice";

export const store = configureStore({
  reducer: {
    courseForm: courseFormSlice,
    courseOutline: courseOutlineSlice,
    chapters: chapterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
