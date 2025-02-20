import { GeneratecourseOutline } from "@/configs/gemini";
import { setCourseOutline } from "@/state/slices/courseOutlineSlice";
import { RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";

const useGemini = () => {
  const courseFormData = useSelector((state: RootState) => state.courseForm);
  const courseOutlineData = useSelector(
    (state: RootState) => state.courseOutline,
  );
  const dispatch = useDispatch();

  const prompt = `You are an expert in curriculum design. Generate a structured course outline in **JSON format** based on the following input:

    **Input Details:**
    - Topic: ${courseFormData.topic}  
    - Category: ${courseFormData.category}  
    - Level: ${courseFormData.level}  
    - Duration: ${courseFormData.duration}  
    - Chapters: ${courseFormData.chapters}
    
    **Output Format:**
    {
      "courseTitle": "{topic}",
      "courseDescription": "A brief summary of what the course covers.",
      "category": "{category}",
      "level": "{level}",
      "totalDuration": "{duration}",
      "chapters": [
        {
          "chapterNumber": 1,
          "chapterName": "Introduction to {topic}",
          "chapterDescription": "An overview of {topic}, its importance, and real-world applications.",
          "chapterDuration": "{time allocation for this chapter}"
        },
        {
          "chapterNumber": 2,
          "chapterName": "Core Concepts of {topic}",
          "chapterDescription": "Deep dive into fundamental principles and key concepts of {topic}.",
          "chapterDuration": "{time allocation for this chapter}"
        }
      ]
    }
    `;

  return async () => {
    const courseOutline = await GeneratecourseOutline(prompt);

    dispatch(setCourseOutline(courseOutline));
  };
};

export default useGemini;
