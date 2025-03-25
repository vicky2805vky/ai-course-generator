import { formStateType } from "@/types/courseFormSliceTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: formStateType = {
  topic: "",
  category: "",
  description: "",
  level: "beginner",
  duration: "less than 1 hrs",
  chapters: "3",
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
    resetForm: () => {
      return initialState;
    },
  },
});

export const { changeFormField, resetForm } = courseFormSlice.actions;

export default courseFormSlice.reducer;
