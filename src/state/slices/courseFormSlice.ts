import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type formStateType = {
  topic: string;
  category: string;
  description: string;
  level: string;
  duration: string;
  chapters: string;
  video: boolean;
  quiz: boolean;
};

const initialState: formStateType = {
  topic: "",
  category: "",
  description: "",
  level: "beginner",
  duration: "less than 1 hrs",
  chapters: "5",
  video: false,
  quiz: false,
};
export const courseFormSlice = createSlice({
  name: "courseForm",
  initialState,
  reducers: {
    changeState: (
      state,
      action: PayloadAction<{
        key: keyof formStateType;
        value: string | boolean;
      }>,
    ) => {
      (state[action.payload.key] as string | boolean) = action.payload.value;
    },
  },
});

export const { changeState } = courseFormSlice.actions;

export default courseFormSlice.reducer;
