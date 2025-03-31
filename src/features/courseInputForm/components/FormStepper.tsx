import React from "react";
import { IconType } from "react-icons";

type formStepperProps = {
  currentStep: number;
  formSteps: {
    name: string;
    Icon: IconType;
  }[];
};

const FormStepper = ({ currentStep, formSteps }: formStepperProps) => {
  return (
    <div className="mx-auto flex items-center justify-between">
      {formSteps.map((step, i) => {
        return (
          <React.Fragment key={i}>
            {i !== 0 && (
              <div
                className={`h-2 w-full bg-primary transition-opacity ${currentStep >= i + 1 ? "opacity-100" : "opacity-50"}`}
              />
            )}
            <div className="relative">
              <div
                className={`w-fit rounded-full bg-primary p-3 text-primary-foreground transition-opacity md:text-3xl ${currentStep >= i + 1 ? "opacity-100" : "opacity-50"} `}
              >
                <step.Icon />
              </div>
              <p className="absolute left-[50%] mt-1 -translate-x-[50%] text-xs">
                {step.name}
              </p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default FormStepper;
