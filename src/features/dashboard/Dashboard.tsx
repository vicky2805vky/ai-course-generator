import { Button } from "@/components/ui/button";
import YourCourses from "./components/YourCourses";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import LoadingDialog from "@/components/LoadingDialog";
import ActivationModal from "./components/apiActivation/ActivationModel";
import { useState } from "react";
import DashboardActivation from "./components/apiActivation/DashboardActivation";

const Dashboard = () => {
  const { user } = useUser();
  const userId = useSelector((store: RootState) => store.user.userId);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="flex flex-col gap-5">
      <p className="text-3xl font-bold">Welcome {user?.fullName}!</p>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold md:text-2xl">your courses</p>
        {userId && userId === user?.id ? (
          <div className="flex gap-3">
            <ActivationModal type="edit" setIsSubmitting={setIsSubmitting} />
            <Link to={"/course/create"}>
              <Button>Create Course</Button>
            </Link>
          </div>
        ) : (
          <ActivationModal type="activate" setIsSubmitting={setIsSubmitting} />
        )}
      </div>
      {userId && userId === user?.id ? (
        <YourCourses />
      ) : (
        <DashboardActivation />
      )}
      <LoadingDialog open={isSubmitting} title="validating api key" />
    </section>
  );
};
export default Dashboard;
