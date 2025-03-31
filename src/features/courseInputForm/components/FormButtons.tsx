import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaGear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useGenerateOutline from "../hooks/useGenerateOutline";
import uuid4 from "uuid4";
import { useDispatch } from "react-redux";
import { resetForm } from "@/services/slices/courseFormSlice";

type formButtonsProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  maxSteps: number;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormButtons = ({
  setCurrentStep,
  currentStep,
  maxSteps,
  setIsSubmitting,
}: formButtonsProps) => {
  return (
    <div className="flex justify-between">
      <PreviousButton
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      {currentStep < maxSteps && (
        <NextButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
      {currentStep === maxSteps && (
        <GenerateButton setIsSubmitting={setIsSubmitting} />
      )}
    </div>
  );
};

export default FormButtons;

const PreviousButton = ({
  currentStep,
  setCurrentStep,
}: Pick<formButtonsProps, "currentStep" | "setCurrentStep">) => {
  return (
    <Button
      disabled={currentStep === 1}
      onClick={() => setCurrentStep(currentStep - 1)}
    >
      <ChevronLeft />
      Prev
    </Button>
  );
};

const NextButton = ({
  currentStep,
  setCurrentStep,
}: Pick<formButtonsProps, "currentStep" | "setCurrentStep">) => {
  return (
    <Button
      form="course-form"
      onClick={(e) => {
        if (document.forms[0].checkValidity()) {
          e.preventDefault();
          setCurrentStep(currentStep + 1);
        }
      }}
    >
      Next <ChevronRight />
    </Button>
  );
};

const GenerateButton = ({
  setIsSubmitting,
}: Pick<formButtonsProps, "setIsSubmitting">) => {
  const navigate = useNavigate();
  const createOuline = useGenerateOutline();
  const dispatch = useDispatch();
  return (
    <Button
      form="course-from"
      onClick={async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await createOuline();
        dispatch(resetForm());
        setIsSubmitting(false);
        navigate(`/course/${uuid4()}/outline`);
      }}
    >
      Generate <FaGear />
    </Button>
  );
};
