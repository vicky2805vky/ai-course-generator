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
    setChapters: (state, action: PayloadAction<chapterContentType>) => {
      const chapter: chapterContentType = {
        chapterName: action.payload.chapterName,
        chapterDuration: action.payload.chapterDuration,
        lessons: action.payload.lessons,
      };
      state.chapterContent.push(chapter);
    },
    setChapterVideo: (state, action: PayloadAction<string[]>) => {
      action.payload.map((videoId) => {
        state.videoIds.push(videoId);
      });
    },
  },
});

export default chapterSlice.reducer;

export const { setChapters, setChapterVideo } = chapterSlice.actions;
