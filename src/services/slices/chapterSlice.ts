import {
  chapterContentType,
  chapterStateType,
} from "@/types/chapterSliceTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: chapterStateType = {
  chapterContent: [],
  videoIds: [],
};

const chapterSlice = createSlice({
  name: "chapterSlice",
  initialState,
  reducers: {
    setChapterState: (_, action: PayloadAction<chapterStateType>) => {
      return action.payload;
    },
    setChapters: (state, action: PayloadAction<chapterContentType>) => {
      state.chapterContent.push(action.payload);
    },
    setChapterVideo: (state, action: PayloadAction<string[]>) => {
      action.payload.map((videoId) => {
        state.videoIds.push(videoId);
      });
    },
    resetChapters: () => {
      return initialState;
    },
  },
});

export default chapterSlice.reducer;

export const { setChapterState, setChapters, setChapterVideo, resetChapters } =
  chapterSlice.actions;
