import Layout from "./components/Layout";
import CourseCreationForm from "./features/courseInputForm/CourseCreationForm";
import CourseSuccessful from "./features/courseOutline/components/CourseSuccessful";
import CourseOutline from "./features/courseOutline/CourseOutline";
import CoursePage from "./features/coursePage/CoursePage";
import Dashboard from "./features/dashboard/Dashboard";
import Demo from "./features/Demo/Demo";
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
        path: "/demo",
        element: <Demo />,
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
    <div className="min-h-[100vh">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
