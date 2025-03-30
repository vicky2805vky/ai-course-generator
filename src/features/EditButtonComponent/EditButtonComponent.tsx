import {
  chapterType,
  courseOutlineType,
} from "@/types/courseOutlineSliceTypes";
import useEditButton from "./hooks/useEditButton";
import Modal from "@/components/Modal";
import EditButtonComponentTrigger from "./components/EditButtonComponentTrigger";
import EditButtonComponentFooter from "./components/EditButtonComponentFooter";
import EditButtonComponentBody from "./components/EditButtonComponentBody";

type editButtonComponentProps = {
  children: React.ReactNode;
  className?: string;
  fieldName: keyof courseOutlineType;
  defaultValue: chapterType | string;
};

const EditButtonComponent = ({
  children,
  className,
  fieldName,
  defaultValue,
}: editButtonComponentProps) => {
  const { editFunction, inputRef, textareaRef } = useEditButton(
    fieldName,
    defaultValue,
  );
  return (
    <div className={`flex items-center ${className ? className : ""}`}>
      {children}
      <Modal
        trigger={<EditButtonComponentTrigger />}
        title="Edit"
        footer={<EditButtonComponentFooter editFunction={editFunction} />}
        description="make change to the following"
        body={
          <EditButtonComponentBody
            fieldName={fieldName}
            defaultValue={defaultValue}
            inputRef={inputRef}
            textareaRef={textareaRef}
            editFunction={editFunction}
          />
        }
      />
    </div>
  );
};

export default EditButtonComponent;
