import { GLASSMORPH_BG } from "@/constants/tailwindConstants";
import FormButtons from "./components/FormButtons";
import FormStepper from "./components/FormStepper";
import { useState } from "react";
import { BsStack } from "react-icons/bs";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { TbTargetArrow } from "react-icons/tb";
import FormBody from "./components/FormBody";

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
  return (
    <div
      className={
        GLASSMORPH_BG +
        "mx-auto w-[_clamp(280px,_50%,_500px)] space-y-10 rounded-lg p-5"
      }
    >
      <FormStepper currentStep={currentFormStep} formSteps={formSteps} />
      <FormBody currentFormStep={currentFormStep} />
      <FormButtons
        currentStep={currentFormStep}
        setCurrentStep={setCurrentFormStep}
        maxSteps={formSteps.length}
      />
    </div>
  );
};

export default CourseCreationForm;
