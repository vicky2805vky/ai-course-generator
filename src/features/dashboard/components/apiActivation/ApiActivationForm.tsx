import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import useApiActivationForm from "../../hooks/useApiActivationForm";

const ApiActivationForm = ({
  setIsSubmitting,
}: {
  setIsSubmitting: React.Dispatch<boolean>;
}) => {
  const { apiRef, handleSubmit } = useApiActivationForm(setIsSubmitting);
  return (
    <form
      id="ai-activate-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <div className="flex items-center gap-3">
        <Label htmlFor="api-input" className="whitespace-nowrap font-bold">
          Api Key:
        </Label>
        <Input
          ref={apiRef}
          id="api-input"
          placeholder="enter your api key here"
        />
      </div>
      <Link
        to={"https://aistudio.google.com/apikey"}
        target="_blank"
        className="inline w-fit text-blue-500 underline"
      >
        get api key
      </Link>
    </form>
  );
};

export default ApiActivationForm;
