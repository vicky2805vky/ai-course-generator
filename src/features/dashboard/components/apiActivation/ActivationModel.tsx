import Modal from "@/components/Modal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import ApiActivationForm from "./ApiActivationForm";

const ActivationModal = ({
  setIsSubmitting,
}: {
  setIsSubmitting: React.Dispatch<boolean>;
}) => {
  return (
    <Modal
      title="Activate your Account"
      description="Enter your gemini Api key to activate your account"
      trigger={
        <span className={cn(buttonVariants())}>Activate your Account</span>
      }
      body={<ApiActivationForm setIsSubmitting={setIsSubmitting} />}
      footer={<Footer />}
    />
  );
};

export default ActivationModal;

const Footer = () => {
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
        Activate
      </DialogClose>
    </div>
  );
};
