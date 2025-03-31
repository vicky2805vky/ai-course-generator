import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaMagnifyingGlass } from "react-icons/fa6";

type searchImageInputProps = {
  setCurrentPage: React.Dispatch<number>;
  setSearchQuery: React.Dispatch<string>;
};
const SearchImageInput = ({
  setSearchQuery,
  setCurrentPage,
}: searchImageInputProps) => {
  return (
    <form
      className="flex w-full max-w-[400px] gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const inputValue = (form[0] as HTMLInputElement).value;
        setCurrentPage(1);
        setSearchQuery(inputValue);
      }}
    >
      <Input type="search" placeholder="search image here" />
      <Button size="icon">
        <FaMagnifyingGlass />
      </Button>
    </form>
  );
};

export default SearchImageInput;
