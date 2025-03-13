import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";

type SelectInputProps = {
  options: string[];
  attributes: SelectProps;
  placeholder: string;
};

const SelectInput = ({
  options,
  attributes,
  placeholder,
}: SelectInputProps) => {
  return (
    <Select {...attributes}>
      <SelectTrigger className="text-[10px] md:text-sm">
        <SelectValue placeholder={"Select " + placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, i) => {
          return (
            <SelectItem
              key={i}
              value={option}
              className="text-[10px] md:text-sm"
            >
              {option}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
