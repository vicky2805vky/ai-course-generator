import { GLASSMORPH_BG } from "@/constants/tailwindConstants";
import FormButtons from "./components/FormButtons";
import FormStepper from "./components/FormStepper";
import { useState } from "react";
import { BsStack } from "react-icons/bs";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { TbTargetArrow } from "react-icons/tb";
import FormBody from "./components/FormBody";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import LoadingDialog from "@/components/LoadingDialog";

const formSteps = [
  {
    name: "topic",
    Icon: TbTargetArrow,
  },
  {
    name: "structure",
    Icon: BsStack,
  },
  {
    name: "extras",
    Icon: HiMiniSquaresPlus,
  },
];

const CourseCreationForm = () => {
  const [currentFormStep, setCurrentFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div
      className={
        GLASSMORPH_BG +
        "mx-auto w-[_clamp(280px,_50%,_500px)] space-y-10 overflow-hidden rounded-lg p-5"
      }
    >
      <Link
        to={"/home"}
        className="absolute right-0 top-0 rounded-bl-xl bg-primary p-3 text-xs md:text-base"
      >
        <FaXmark aria-hidden />
        <p className="sr-only">cancel course creation</p>
      </Link>
      <FormStepper currentStep={currentFormStep} formSteps={formSteps} />
      <FormBody currentFormStep={currentFormStep} />
      <FormButtons
        currentStep={currentFormStep}
        setCurrentStep={setCurrentFormStep}
        maxSteps={formSteps.length}
        setIsSubmitting={setIsSubmitting}
      />
      <LoadingDialog open={isSubmitting} title="Creating Outline" />
    </div>
  );
};

export default CourseCreationForm;
