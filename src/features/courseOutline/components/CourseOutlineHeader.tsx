import EditButtonComponent from "@/features/EditButtonComponent/EditButtonComponent";
import { RootState } from "@/services/store";
import { useSelector } from "react-redux";

const CourseOutlineHeader = () => {
  const { courseTitle, courseDescription } = useSelector(
    (store: RootState) => store.courseOutline,
  );
  return (
    <div className="flex flex-col-reverse gap-5 md:flex-row [&>*]:flex-1">
      <div className="space-y-5">
        <EditButtonComponent defaultValue={courseTitle} fieldName="courseTitle">
          <h3 className="text-2xl font-bold text-primary md:text-3xl">
            {courseTitle}
          </h3>
        </EditButtonComponent>
        <EditButtonComponent
          defaultValue={courseDescription}
          fieldName="courseDescription"
        >
          <h6 className="text-lg font-bold md:text-xl">Description</h6>
        </EditButtonComponent>
        <p className="text-justify text-sm md:text-base">{courseDescription}</p>
      </div>
      <div>
        <img
          src="/placeholder.webp"
          alt="placeholder"
          className="mx-auto w-10/12 rounded-lg md:w-4/6"
        />
      </div>
    </div>
  );
};

export default CourseOutlineHeader;
