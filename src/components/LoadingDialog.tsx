import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
const LoadingDialog = ({ open }: { open: boolean }) => {
  return (
    <Dialog open={open}>
      <DialogContent className="opacity-80">
        <DialogHeader>
          <DialogTitle>Creating Outline...</DialogTitle>
        </DialogHeader>
        <img src="/loader.gif" alt="loader" className="mx-auto size-28" />
      </DialogContent>
    </Dialog>
  );
};

export default LoadingDialog;
