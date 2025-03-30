import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaRegEdit } from "react-icons/fa";

const EditButtonComponentTrigger = () => {
  return (
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
  );
};

export default EditButtonComponentTrigger;
