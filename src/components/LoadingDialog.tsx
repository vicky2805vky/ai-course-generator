import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type loadingDialogProps = {
  open: boolean;
  title: string;
  children: ReactNode;
};

const LoadingDialog = ({ open, title, children }: loadingDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}...</DialogTitle>
          <DialogDescription>
            <span className="sr-only">{title}</span>
          </DialogDescription>
        </DialogHeader>
        <img src="/loader.gif" alt="loader" className="mx-auto size-28" />
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default LoadingDialog;
