import NavBar from "@/features/navigation/NavBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "./ui/sonner";
import { useUser } from "@clerk/clerk-react";
import { PROTECTED_ROUTES } from "@/constants/appConstants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCourses } from "@/services/api/courseApi";
import { AppDispatch } from "@/services/store";
import { getUser } from "@/services/api/userApi";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    location.pathname.match(route),
  );
  const dispatch = useDispatch<AppDispatch>();
  dispatch(getCourses());
  user && dispatch(getUser(user?.id));

  useEffect(() => {
    if (isProtectedRoute && !isSignedIn) {
      navigate("/sign-up");
    }
  }, [location.pathname, isProtectedRoute, isSignedIn]);

  return (
    <>
      <NavBar />
      <main className="space-y-10 px-5 py-5 pt-[100px] md:px-20 md:py-10 md:pt-[100px] [&_*]:box-border">
        <Outlet />
        <Toaster />
      </main>
    </>
  );
};

export default Layout;
