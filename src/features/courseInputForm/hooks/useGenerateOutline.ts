import { generateCourseOutline } from "@/features/courseOutline/utils/generateCourseOutline";
import { setCourseOutline } from "@/services/slices/courseOutlineSlice";
import { RootState } from "@/services/store";
import { useDispatch, useSelector } from "react-redux";

const useGenerateOutline = () => {
  const courseFormData = useSelector((state: RootState) => state.courseForm);
  const dispatch = useDispatch();

  const prompt = `You are an expert in curriculum design, specializing in structured and engaging course outlines. Your task is to generate a well-structured JSON-formatted course outline based on the following user inputs:

**Course Details:**
- **Topic:** ${courseFormData.topic}
- **Category:** ${courseFormData.category}
- **Level:** ${courseFormData.level}
- **Duration:** ${courseFormData.duration}
- **Chapters:** ${courseFormData.chapters}

${courseFormData.description ? `The user envisions the course with the following details:\n\n"${courseFormData.description}"\n\nEnsure the course structure aligns with this vision.` : ""}

### **Output Format:**  
- Ensure the output is **valid JSON** without markdown formatting.  
- Each chapter should have meaningful **lesson titles** based on its topic.  
- The "youtubeQueries" field should be a **separate array outside the chapters**, containing **one search query per chapter** in the same order.  

---

**Example Output Format:**

{
  "courseTitle": "{A unique and engaging course title related to {topic}}",
  "courseDescription": "{A compelling summary of what the course covers, its learning objectives, and who it's for}",
  "category": "{category}",
  "level": "{beginner/intermediate/advanced}",
  "totalDuration": "{duration such as 1hr/30mins/2.5hrs}",
  "chapters": [
    {
      "chapterNumber": 1,
      "chapterName": "Introduction to {topic}",
      "chapterDuration": "{time allocation for this chapter}",
      "lessons": [
        "{Lesson 1 Title - Overview}",
        "{Lesson 2 Title - Key Terminologies}",
        "{Lesson 3 Title - Real-world Applications}",
        "{Lesson 4 Title - Summary & Next Steps}"
      ]
    },
    {
      "chapterNumber": 2,
      "chapterName": "Core Concepts of {topic}",
      "chapterDuration": "{time allocation for this chapter}",
      "lessons": [
        "{Lesson 1 Title - Foundational Concept 1}",
        "{Lesson 2 Title - Foundational Concept 2}",
        "{Lesson 3 Title - Hands-on Activity}",
        "{Lesson 4 Title - Common Mistakes to Avoid}"
      ]
    }
  ],
  "youtubeQueries": [
    "{Best introductory video on {topic}}",
    "{Deep dive into {topic} concepts}"
  ]
}

`;

  return async () => {
    try {
      const courseOutline = await generateCourseOutline(prompt);
      dispatch(setCourseOutline(courseOutline));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useGenerateOutline;
