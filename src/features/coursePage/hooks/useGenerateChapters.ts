import { generateChapterContent } from "@/configs/gemini";
import { setChapters } from "@/state/slices/chapterSlice";
import { chapterType } from "@/state/slices/courseOutlineSlice";
import { useDispatch } from "react-redux";

const useGenerateChapters = () => {
  const dispatch = useDispatch();
  return async (courseTitle: string, chapters: chapterType[]) => {
    for (const chapter of chapters) {
      const prompt = `
You are an expert educator. Generate **detailed chapter content** in JSON format based on the following input:

**Input Details:**
- Course Title: ${courseTitle}
- Chapter Name: ${chapter.chapterName}
- Chapter Duration: ${chapter.chapterDuration}
- Lessons: ${chapter.lessons.join(" ,")}

### **Instructions:**
1. **Lesson Content:**
   - Explain the lesson **in detail** with **examples, use cases, and best practices**.
   - Use a **step-by-step breakdown** of key concepts.
   - Provide **real-world applications** of the topic.
   - Ensure all responses are **original, reworded, and structured for unique learning experiences**.
   - Explain each topic using **real-world analogies, simple metaphors, and unique examples**.


2. **Code Example:**
   - If applicable, include a **detailed code snippet** formatted inside:
     \`\`\`html
       <pre><code>{relevant_code_snippet}</code></pre>
     \`\`\`
   - Ensure the example is **practical** and related to the lesson.
   - If it does not need code example place null here

### **Output Format:**
Ensure the output is **valid JSON format** without markdown formatting.

{
  "courseTitle": "${courseTitle}",
  "chapterName": "${chapter.chapterName}",
  "chapterDuration": "${chapter.chapterDuration}",
  "lessons": [
    {
      "lessonTitle": "{lesson1}",
      "lessonContent": "Provide an **in-depth** explanation of {lesson1}. Include **real-world applications, best practices, and a step-by-step breakdown** of concepts. If needed, insert important formulas or highlights inside a styled div like this:\n\n <div className={GLASSMORPH_BG + ' overflow-scroll p-5'}> Key Formula or Important Concept Here </div>",
      "codeExample": "<div className={GLASSMORPH_BG + ' overflow-scroll p-5'}><pre><code>{relevant_code_snippet}</code></pre></div>"
    },
    {
      "lessonTitle": "{lesson2}",
      "lessonContent": "Provide an **in-depth** explanation of {lesson2}. Cover **detailed concepts, examples, and key takeaways.** Important formulas or key takeaways should be wrapped inside:\n\n <div className={GLASSMORPH_BG + ' overflow-scroll p-5'}> Key Concept Here </div>",
      "codeExample": "<div className={GLASSMORPH_BG + ' overflow-scroll p-5'}><pre><code>{relevant_code_snippet}</code></pre></div>"
    }
  ]
}
`;
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
