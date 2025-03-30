import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { PRIMARY_BG } from "@/constants/tailwindConstants";

type modalProps = {
  title?: string;
  description?: string;
  body: ReactNode;
  trigger: ReactNode;
  footer?: ReactNode;
};

const Modal = ({
  trigger,
  body,
  description = "",
  title = "",
  footer,
}: modalProps) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className={PRIMARY_BG + "max-w-[400px] text-white"}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {body}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
