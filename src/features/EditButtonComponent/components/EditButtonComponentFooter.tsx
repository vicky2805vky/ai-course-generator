import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

const EditButtonComponentFooter = ({
  editFunction,
}: {
  editFunction: () => void;
}) => {
  return (
    <div className="ml-auto flex gap-5">
      <DialogClose asChild>
        <Button onClick={editFunction}>Save</Button>
      </DialogClose>
      <DialogClose asChild>
        <Button>cancel</Button>
      </DialogClose>
    </div>
  );
};

export default EditButtonComponentFooter;
