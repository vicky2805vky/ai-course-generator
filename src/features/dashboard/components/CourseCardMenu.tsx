import { buttonVariants } from "@/components/ui/button";
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
import { IoMdMenu } from "react-icons/io";
import { useDispatch } from "react-redux";

type courseCardMenuProps = {
  courseId: string;
};

const CourseCardMenu = ({ courseId }: courseCardMenuProps) => {
  const dispatch = useDispatch<AppDispatch>();
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
        <DropdownMenuItem>view</DropdownMenuItem>
        <DropdownMenuItem>Share</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            dispatch(deleteCourse(courseId));
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CourseCardMenu;
