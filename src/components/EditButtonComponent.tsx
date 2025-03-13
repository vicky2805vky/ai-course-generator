import { FaRegEdit } from "react-icons/fa";
import { Button, buttonVariants } from "./ui/button";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { PRIMARY_BG } from "@/constants/tailwindConstants";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

type editButtonComponentProps = {
  children: React.ReactNode;
  className?: string;
};

const EditButtonComponent = ({
  children,
  className,
}: editButtonComponentProps) => {
  return (
    <div className={`flex items-center ${className ? className : ""}`}>
      {children}
      <Dialog>
        <DialogTrigger>
          <div
            className={cn(
              buttonVariants({
                size: "icon",
                className: "!scale-75 rounded-full",
              }),
            )}
          >
            <FaRegEdit />
          </div>
        </DialogTrigger>
        <DialogContent className={PRIMARY_BG + "max-w-[400px] text-white"}>
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription>make changes to the following</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-5">
            <Label className="font-bold">Edit:</Label>
            <Input className="h-7 text-xs" />
          </div>
          <DialogFooter>
            <div className="ml-auto flex gap-5">
              <Button>Save</Button>
              <DialogClose>
                <div className={cn(buttonVariants())}>cancel</div>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditButtonComponent;
