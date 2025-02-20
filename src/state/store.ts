import { configureStore } from "@reduxjs/toolkit";
import courseFormSlice from "@/state/slices/courseFormSlice";
import courseOutlineSlice from "@/state/slices/courseOutlineSlice";

export const store = configureStore({
  reducer: {
    courseForm: courseFormSlice,
    courseOutline: courseOutlineSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
