import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import CourseCreationForm from "@/features/courseInputForm/CourseCreationForm";
import CourseSuccessful from "@/features/courseOutline/components/courseSuccessful/CourseSuccessful";
import CourseOutline from "@/features/courseOutline/CourseOutline";
import CoursePage from "@/features/coursePage/CoursePage";
import Dashboard from "@/features/dashboard/Dashboard";
import Demo from "@/features/Demo/Demo";
import LandingPage from "@/features/landing/LandingPage";
import SignUpPage from "@/features/auth/components/SignUpPage";
import ExplorePage from "@/features/explore/ExplorePage";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
      {
        path: "/home",
        element: <Dashboard />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/course",
        children: [
          {
            path: "create",
            element: <CourseCreationForm />,
          },
          {
            path: ":id/outline",
            element: <CourseOutline />,
          },
          {
            path: ":id/success",
            element: <CourseSuccessful />,
          },
          {
            path: ":id",
            element: <CoursePage />,
          },
        ],
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/sign-in",
        element: <SignUpPage />,
      },
      {
        path: "/*",
        element: <p>page not found</p>,
      },
    ],
  },
]);
