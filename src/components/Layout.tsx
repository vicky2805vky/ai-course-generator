import NavBar from "@/features/navigation/NavBar";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "./ui/sonner";

const Layout = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar />
        <main className="space-y-10 px-5 py-5 pt-[100px] md:px-20 md:py-10 md:pt-[100px] [&_*]:box-border">
          <Outlet />
          <Toaster />
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
