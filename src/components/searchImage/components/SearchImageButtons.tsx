import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type searchImageButtonsProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<number>;
  totalPages: number;
};

const SearchImageButtons = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: searchImageButtonsProps) => {
  return (
    <div className="flex justify-between">
      <Button
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        <ChevronLeft /> Prev
      </Button>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        Next <ChevronRight />
      </Button>
    </div>
  );
};

export default SearchImageButtons;
