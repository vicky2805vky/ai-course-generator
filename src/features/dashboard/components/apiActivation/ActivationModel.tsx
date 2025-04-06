import Modal from "@/components/Modal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import ApiActivationForm from "./ApiActivationForm";

const ActivationModal = ({
  setIsSubmitting,
  type,
}: {
  setIsSubmitting: React.Dispatch<boolean>;
  type: "activate" | "edit";
}) => {
  const title = type === "activate" ? "Activate your Account" : "Edit Api Key";
  const Description =
    type === "activate"
      ? "Enter your gemini Api Key activate your account"
      : "Enter your new api key";
  type === "activate" ? "Activate your Account" : "Edit Api Key";
  const triggerText =
    type === "activate" ? "Activate your Account" : "Edit api key";
  return (
    <Modal
      title={title}
      description={Description}
      trigger={<span className={cn(buttonVariants())}>{triggerText}</span>}
      body={<ApiActivationForm setIsSubmitting={setIsSubmitting} />}
      footer={<Footer type={type} />}
    />
  );
};

export default ActivationModal;

const Footer = ({ type }: { type: "activate" | "edit" }) => {
  return (
    <div className="space-x-3">
      <DialogClose className={cn(buttonVariants({ variant: "destructive" }))}>
        Cancel
      </DialogClose>
      <DialogClose
        type="submit"
        form="ai-activate-form"
        className={cn(buttonVariants())}
      >
        {type}
      </DialogClose>
    </div>
  );
};
