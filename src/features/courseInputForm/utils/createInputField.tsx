import { Input } from "@/components/ui/input";
import { FormField } from "../types";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import SelectInput from "@/components/SelectInput";

const createInputField = (inputConfig: FormField) => {
  switch (inputConfig.type) {
    case "input":
      return <Input className="text-[10px]" {...inputConfig.attributes} />;

    case "text-area":
      return <Textarea {...inputConfig.attributes} className="text-[10px]" />;
    case "select":
      return (
        <SelectInput
          options={inputConfig.options}
          attributes={inputConfig.attributes}
          placeholder={inputConfig.label}
        />
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
