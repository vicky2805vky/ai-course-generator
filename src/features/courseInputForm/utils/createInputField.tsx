import { Input } from "@/components/ui/input";
import { FormField } from "../types";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const createInputField = (inputConfig: FormField) => {
  switch (inputConfig.type) {
    case "input":
      return (
        <Input
          className="text-[10px] text-primary placeholder:text-primary"
          {...inputConfig.attributes}
        />
      );

    case "text-area":
      return (
        <Textarea
          {...inputConfig.attributes}
          className="text-[10px] text-primary placeholder:text-primary"
        />
      );
    case "select":
      return (
        <Select {...inputConfig.attributes}>
          <SelectTrigger className="w-[180px] text-[10px] text-primary md:text-sm">
            <SelectValue placeholder={"select " + inputConfig.label} />
          </SelectTrigger>
          <SelectContent className="text-primary">
            {inputConfig.options.map((option, i) => {
              return (
                <SelectItem
                  key={i}
                  className="text-[10px] md:text-sm"
                  value={option}
                >
                  {option}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      );
    case "switch":
      return (
        <div>
          <Switch {...inputConfig.attributes} />
        </div>
      );
  }
};

export default createInputField;
