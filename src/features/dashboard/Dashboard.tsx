import { Button } from "@/components/ui/button";
import YourCourses from "./components/YourCourses";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <section className="flex flex-col gap-5">
      <p className="text-3xl font-bold">Welcome {user?.fullName} !</p>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold md:text-2xl">your courses</p>
        <Link to={"/course/create"}>
          <Button>Create Course</Button>
        </Link>
      </div>
      <YourCourses />
    </section>
  );
};

export default Dashboard;
