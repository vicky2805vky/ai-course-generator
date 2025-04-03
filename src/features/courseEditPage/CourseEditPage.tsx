import LoadingDialog from "@/components/LoadingDialog";
import CourseEditPageImage from "./components/CourseEditPageImage";
import CourseEditPageInputs from "./components/CourseEditPageInputs";
import useEditCourse from "./hooks/useEditCourse";
import CourseEditPageButtons from "./components/CourseEditPageButtons";
import { EDIT_FIELDS } from "./constants";

const CourseEditPage = () => {
  const {
    course,
    editCourse,
    editFieldsValues,
    isPosting,
    setEditFieldsValues,
    courseImage,
  } = useEditCourse();

  if (!course) return <p>this course does not exist</p>;
  return (
    <div className="space-y-5">
      <LoadingDialog open={isPosting} title="Updating your course" />
      <h2 className="text-xl font-bold md:text-2xl">Edit Course</h2>
      <CourseEditPageImage courseImage={courseImage} />
      <section className="grid w-3/6 min-w-[300px] grid-cols-2 gap-5">
        {EDIT_FIELDS.map((field, i) => (
          <CourseEditPageInputs
            key={i}
            field={field}
            editFieldsValues={editFieldsValues}
            setEditFieldsValues={setEditFieldsValues}
          />
        ))}
        <CourseEditPageButtons editCourse={editCourse} />
      </section>
    </div>
  );
};

export default CourseEditPage;
