import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
      <div className="flex w-6/12 max-w-[400px] items-center justify-between gap-5">
        <div className="flex flex-1 flex-wrap gap-3">
          <Progress value={80} />
          <p className="text-nowrap text-xs md:text-sm">
            4 out of 5 courses created
          </p>
        </div>
        <Button>Upgrade</Button>
      </div>
    </section>
  );
};

export default Dashboard;
