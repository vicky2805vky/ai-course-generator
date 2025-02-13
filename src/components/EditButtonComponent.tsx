import { FaRegEdit } from "react-icons/fa";
import { Button } from "./ui/button";
import React from "react";

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
      <Button size="icon" className="!scale-75 rounded-full">
        <FaRegEdit />
      </Button>
    </div>
  );
};

export default EditButtonComponent;
