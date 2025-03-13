import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";

type loadingDialogProps = {
  open: boolean;
  title: string;
};

const LoadingDialog = ({ open, title }: loadingDialogProps) => {
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
      </DialogContent>
    </Dialog>
  );
};

export default LoadingDialog;
