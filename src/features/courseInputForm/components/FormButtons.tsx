import { Button } from "@/components/ui/button";
import { RootState } from "@/state/store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaGear } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGemini from "../hooks/useGemini";

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
  const navigate = useNavigate();
  const callGemini = useGemini();
  const courseFormData = useSelector<RootState>((store) => store.courseForm);
  return (
    <div className="flex justify-between">
      <Button
        disabled={currentStep === 1}
        onClick={() => setCurrentStep(currentStep - 1)}
      >
        <ChevronLeft />
        Prev
      </Button>
      {currentStep < maxSteps && (
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
      )}
      {currentStep === maxSteps && (
        <Button
          form="course-from"
          onClick={async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            await callGemini();
            setIsSubmitting(false);
            navigate("/course/courseid/outline");
          }}
        >
          Generate <FaGear />
        </Button>
      )}
    </div>
  );
};

export default FormButtons;
