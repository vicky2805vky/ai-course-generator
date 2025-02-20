import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export async function GeneratecourseOutline(prompt: string) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: '\nYou are an expert in curriculum design. Generate a structured course outline in **JSON format** based on the following input:\n\n**Input Details:**\n- Topic: {python}  \n- Category: {programming}  \n- Level: {beginner}  \n- Duration: {3-5 hrs}  \n- Chapters: {10}\n\n**Requirements:**\n- Generate a **unique course title** relevant to the topic.\n- Provide a **short course description** (2-3 sentences) summarizing what the course covers.\n- Structure the course into the requested number of chapters.\n- Each chapter should have a **name, description, and estimated duration**.\n\n**Output Format (JSON, no markdown formatting):**\n{\n  "courseTitle": "A unique title based on {topic}",\n  "courseDescription": "A brief summary of what the course covers.",\n  "category": "{category}",\n  "level": "{beginner/intermediate/advanced}",\n  "totalDuration": "{duration}",\n  "chapters": [\n    {\n      "chapterNumber": 1,\n      "chapterName": "Introduction to {topic}",\n      "chapterDescription": "An overview of {topic}, its importance, and real-world applications.",\n      "chapterDuration": "{time allocation for this chapter}"\n    },\n    {\n      "chapterNumber": 2,\n      "chapterName": "Core Concepts of {topic}",\n      "chapterDescription": "Deep dive into fundamental principles and key concepts of {topic}.",\n      "chapterDuration": "{time allocation for this chapter}"\n    },\n    ...\n  ]\n}\n',
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n  "courseTitle": "Python for Absolute Beginners: Your First Steps into Programming",\n  "courseDescription": "This course is designed for individuals with no prior programming experience. It provides a comprehensive introduction to Python, covering fundamental concepts and practical applications to get you started on your programming journey.",\n  "category": "programming",\n  "level": "beginner",\n  "totalDuration": "4 hrs",\n  "chapters": [\n    {\n      "chapterNumber": 1,\n      "chapterName": "Welcome to Python!",\n      "chapterDescription": "An overview of Python, its history, key features, and why it\'s a great language for beginners. We\'ll also discuss its importance and real-world applications.",\n      "chapterDuration": "20 mins"\n    },\n    {\n      "chapterNumber": 2,\n      "chapterName": "Setting Up Your Python Environment",\n      "chapterDescription": "Step-by-step guide to installing Python and choosing a suitable code editor (IDE). We\'ll also cover the basics of the command line interface.",\n      "chapterDuration": "30 mins"\n    },\n    {\n      "chapterNumber": 3,\n      "chapterName": "Variables, Data Types, and Operators",\n      "chapterDescription": "Learn about different data types in Python (integers, floats, strings, booleans), how to declare variables, and perform basic arithmetic and logical operations.",\n      "chapterDuration": "35 mins"\n    },\n    {\n      "chapterNumber": 4,\n      "chapterName": "Input and Output",\n      "chapterDescription": "Discover how to take input from the user using the `input()` function and display output using the `print()` function. Practice formatting output for clarity.",\n      "chapterDuration": "25 mins"\n    },\n    {\n      "chapterNumber": 5,\n      "chapterName": "Conditional Statements: If, Else, and Elif",\n      "chapterDescription": "Understand how to control the flow of your program using conditional statements. Implement decision-making logic based on different conditions.",\n      "chapterDuration": "30 mins"\n    },\n    {\n      "chapterNumber": 6,\n      "chapterName": "Loops: For and While",\n      "chapterDescription": "Explore different types of loops in Python. Learn to iterate over sequences (lists, strings) and execute code repeatedly based on a condition.",\n      "chapterDuration": "35 mins"\n    },\n    {\n      "chapterNumber": 7,\n      "chapterName": "Working with Strings",\n      "chapterDescription": "Learn various string manipulation techniques, including slicing, concatenation, formatting, and common string methods.",\n      "chapterDuration": "30 mins"\n    },\n    {\n      "chapterNumber": 8,\n      "chapterName": "Lists and Tuples",\n      "chapterDescription": "Introduction to lists and tuples - two fundamental data structures in Python. Learn how to create, access, modify, and iterate over them.",\n      "chapterDuration": "35 mins"\n    },\n    {\n      "chapterNumber": 9,\n      "chapterName": "Functions: Defining and Calling",\n      "chapterDescription": "Understand the concept of functions and learn how to define your own reusable blocks of code. Explore function parameters, return values, and scope.",\n      "chapterDuration": "30 mins"\n    },\n    {\n      "chapterNumber": 10,\n      "chapterName": "Putting It All Together: A Simple Project",\n      "chapterDescription": "Consolidate your knowledge by building a small, practical project that utilizes the concepts learned throughout the course. This will reinforce your understanding and build confidence.",\n      "chapterDuration": "40 mins"\n    }\n  ]\n}\n```',
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  return JSON.parse(result.response.text());
}
