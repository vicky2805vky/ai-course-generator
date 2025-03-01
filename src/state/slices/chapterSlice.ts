import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type lessonType = {
  codeExample: string | null;
  lessonContent: string;
  lessonTitle: string;
};

type chapterContentType = {
  chapterDuration: string;
  chapterName: string;
  lessons: lessonType[];
};

type chapterStateType = {
  chapterContent: chapterContentType[];
  videoIds: string[];
};

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
