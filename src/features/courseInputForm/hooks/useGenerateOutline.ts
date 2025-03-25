import { generateCourseOutline } from "@/features/courseOutline/utils/generateCourseOutline";
import { setCourseOutline } from "@/services/slices/courseOutlineSlice";
import { RootState } from "@/services/store";
import { useDispatch, useSelector } from "react-redux";

const useGenerateOutline = () => {
  const courseFormData = useSelector((state: RootState) => state.courseForm);
  const dispatch = useDispatch();

  const prompt = `You are an expert in curriculum design. Generate a structured course outline in JSON format based on the following input:

**Input Details:**
- Topic: ${courseFormData.topic}
- Category:${courseFormData.category}
- Level: ${courseFormData.level}
- Duration: ${courseFormData.duration}
- Chapters: ${courseFormData.chapters}

**Output Format:**
Ensure the output is in **valid JSON format** without markdown formatting.

{
 "courseTitle": "{A unique and engaging course title related to {topic}}",
 "courseDescription": "{A brief summary of what the course covers and its benefits}",
 "category": "{category}",
 "level": "{beginner/intermediate/advanced}",
 "totalDuration": "{duration}",
 "chapters": [
 {
 "chapterNumber": 1,
 "chapterName": "Introduction to {topic}",
 "chapterDuration": "{time allocation for this chapter}",
 "lessons": [
 "Lesson 1 Title",
 "Lesson 2 Title",
 "Lesson 3 Title",
 "Lesson 4 Title"
 ]
 },
 {
 "chapterNumber": 2,
 "chapterName": "Core Concepts of {topic}",
 "chapterDuration": "{time allocation for this chapter}",
 "lessons": [
 "Lesson 1 Title",
 "Lesson 2 Title",
 "Lesson 3 Title",
 "Lesson 4 Title"
 ]
 }
 ]
}`;

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
