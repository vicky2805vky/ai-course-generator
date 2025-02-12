import NavBar from "@/features/navigation/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="px-5 py-5 pt-[100px] md:px-20 md:py-10 md:pt-[100px] [&_*]:box-border">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
