import { generateChapterContent } from "@/features/courseOutline/utils/generateChapters";
import { LANGUAGES } from "@/features/coursePage/constants/constants";
import { setChapters } from "@/state/slices/chapterSlice";
import { chapterType } from "@/types/courseOutlineSliceTypes";
import { useDispatch } from "react-redux";

const useGenerateChapters = () => {
  const dispatch = useDispatch();
  return async (courseTitle: string, chapters: chapterType[]) => {
    for (const chapter of chapters) {
      const prompt = `

      You are an expert educator. Generate detailed chapter content in JSON format based on the following input:

      Input Details:
      
      Course Title: ${courseTitle}
      Chapter Name: ${chapter.chapterName}
      Chapter Duration: ${chapter.chapterDuration}
      Lessons: ${chapter.lessons.join(" ,")}
      Instructions:
      
      Lesson Content:
      
      Provide an in-depth explanation of each lesson with examples, use cases, and best practices.
      Include a step-by-step breakdown of key concepts and real-world applications.
      All responses must be original and reworded for a unique learning experience.
      Use real-world analogies, simple metaphors, and unique examples.
      If you want to show a code example inline, insert something like: <CodeBlock codeString="console.log('Hello');" language="javascript" />.
      Code Example (Detailed Snippet or Executable):
      
      If you need to provide a more structured code example, return an object in one of the following formats: { "type": "snippet", "language": "html", "code": "<h1>Hello World</h1>\n<p>my first program</p>" } or { "type": "executable", "language": "python", "code": "print('Hello World')\nvariable="Hello world"" }
      These are the languages I can run: ${LANGUAGES.join(", ")}. Use "type": "executable" only if the language is in that list; otherwise, "snippet".
      Each new line in the code must be represented by "\n".
      The code should be practical, run without errors, and relate to the lesson.
      for example, if a javascript function uses a dom element it will throw error because I use node js to run it so it should be "snippet" type.
      If a code example is not needed, place null for "codeExample".
      Output Format: Make sure the output is valid JSON with no additional markdown. I will parse it using JSON.parse, so it must not contain unescaped special characters or extra backticks.
      
      { "courseTitle": "${courseTitle}", "chapterName": "${chapter.chapterName}", "chapterDuration": "${chapter.chapterDuration}", "lessons": [ { "lessonTitle": "{lesson1}", "lessonContent": "Provide an in-depth explanation of {lesson1}. Include real-world applications, best practices, and a step-by-step breakdown of concepts. If needed, insert important formulas or highlights inside:\n\n <div>Key Formula or Concept</div>", "codeExample": "Use the snippet or executable object as described above, or null if not needed" }, { "lessonTitle": "{lesson2}", "lessonContent": "Provide an in-depth explanation of {lesson2}, covering detailed concepts, examples, and key takeaways. If needed, highlight essential points inside:\n\n <div>Key Concept Here</div>", "codeExample": "Use the snippet or executable object as described above, or null if not needed" } ] }`;
      try {
        const result = await generateChapterContent(prompt);
        console.log(result);
        dispatch(setChapters(result));
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export default useGenerateChapters;
