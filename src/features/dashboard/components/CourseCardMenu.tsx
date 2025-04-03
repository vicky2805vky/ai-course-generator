import Modal from "@/components/Modal";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PRIMARY_BG } from "@/constants/tailwindConstants";
import { cn } from "@/lib/utils";
import { deleteCourse } from "@/services/api/courseApi";
import { AppDispatch } from "@/services/store";
import { DialogClose } from "@radix-ui/react-dialog";
import { IoMdMenu } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

type courseCardMenuProps = {
  courseId: string;
};

const CourseCardMenu = ({ courseId }: courseCardMenuProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate();
  const courseLink = `/course/${courseId}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className={cn(
            buttonVariants({ variant: "primaryReverse", size: "icon" }),
          )}
        >
          <IoMdMenu />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={PRIMARY_BG + "text-white"}>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            navigate(courseLink);
          }}
        >
          view
        </DropdownMenuItem>
        {location.pathname.split("/").reverse()[0] === "home" && (
          <>
            <DropdownMenuItem
              onClick={() => {
                navigate(courseLink + "/edit");
              }}
            >
              Edit
            </DropdownMenuItem>
            <Modal
              trigger={
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault();
                  }}
                >
                  Delete
                </DropdownMenuItem>
              }
              triggerClass="w-full"
              title="Are you sure?"
              description="This action is permenant"
              body={
                <div className="flex justify-end gap-3">
                  <DialogClose>
                    <span
                      className={cn(buttonVariants({ variant: "destructive" }))}
                    >
                      cancel
                    </span>
                  </DialogClose>
                  <Button
                    onClick={() => {
                      dispatch(deleteCourse(courseId));
                    }}
                  >
                    confirm
                  </Button>
                </div>
              }
            />
          </>
        )}
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(window.location.host + courseLink);
            toast("link copied");
          }}
        >
          copy link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CourseCardMenu;
