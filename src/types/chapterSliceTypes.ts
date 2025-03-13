export type codeExampleType = {
  type: string;
  language: string;
  code: string;
};

type lessonType = {
  codeExample: codeExampleType;
  lessonContent: string;
  lessonTitle: string;
};

export type chapterContentType = {
  chapterDuration: string;
  chapterName: string;
  lessons: lessonType[];
};

export type chapterStateType = {
  chapterContent: chapterContentType[];
  videoIds: string[];
};
