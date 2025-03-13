import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className={cn(buttonVariants())}>open</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2">
          <Button variant="destructive">Delete</Button>
          <DialogClose>
            <span className={cn(buttonVariants())}>close</span>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
