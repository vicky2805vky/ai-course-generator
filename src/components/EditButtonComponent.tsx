import { FaRegEdit } from "react-icons/fa";
import { Button } from "./ui/button";
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
import { GLASSMORPH_BG } from "@/constants/tailwindConstants";
import { Label } from "./ui/label";

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
          <Button size="icon" className="!scale-75 rounded-full">
            <FaRegEdit />
          </Button>
        </DialogTrigger>
        <DialogContent className={GLASSMORPH_BG + "max-w-[400px] text-white"}>
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription>
              <div className="flex items-center gap-5">
                <Label className="font-bold">Edit:</Label>
                <Input className="h-7 text-xs" />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="ml-auto flex gap-5">
              <Button>Save</Button>
              <DialogClose>
                <Button>cancel</Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditButtonComponent;
