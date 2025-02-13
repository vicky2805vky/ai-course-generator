import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaGear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type formButtonsProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  maxSteps: number;
};

const FormButtons = ({
  setCurrentStep,
  currentStep,
  maxSteps,
}: formButtonsProps) => {
  const navigate = useNavigate();
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
        <Button onClick={() => setCurrentStep(currentStep + 1)}>
          Next <ChevronRight />
        </Button>
      )}
      {currentStep === maxSteps && (
        <Button
          onClick={() => {
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
