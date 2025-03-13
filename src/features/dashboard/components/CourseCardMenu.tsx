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
import { IoMdMenu } from "react-icons/io";

const CourseCardMenu = () => {
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
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CourseCardMenu;
