import Layout from "./components/Layout";
import CourseCreationForm from "./features/courseInputForm/CourseCreationForm";
import CourseSuccessful from "./features/courseOutline/components/CourseSuccessful";
import CourseOutline from "./features/courseOutline/CourseOutline";
import CoursePage from "./features/coursePage/CoursePage";
import Dashboard from "./features/dashboard/Dashboard";
import LandingPage from "./features/landing/LandingPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <Dashboard />,
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
        path: "/*",
        element: <p>page not found</p>,
      },
    ],
  },
]);

const App = () => {
  return (
    <div
      className="min-h-[100vh] bg-[#191D29] bg-cover bg-fixed bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
