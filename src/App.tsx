import { RouterProvider } from "react-router-dom";
import { ROUTER } from "./components/Router";
import { dark, experimental__simple } from "@clerk/themes";
import { useTheme } from "./components/ThemeProvider";
import { ClerkProvider, GoogleOneTap } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { getCourses } from "./services/api/courseApi";
import { AppDispatch } from "./services/store";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  dispatch(getCourses());
  return (
    <div className="min-h-[100vh">
      <ClerkProvider
        appearance={{
          baseTheme: theme === "dark" ? dark : experimental__simple,
          layout: {
            animations: true,
          },
        }}
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      >
        <GoogleOneTap />
        <RouterProvider router={ROUTER} />
      </ClerkProvider>
    </div>
  );
};

export default App;
