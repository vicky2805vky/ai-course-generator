import { formStateType } from "@/types/courseFormSliceTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    changeFormField: (
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

export const { changeFormField } = courseFormSlice.actions;

export default courseFormSlice.reducer;
