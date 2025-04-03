import { updateCourse } from "@/services/api/courseApi";
import {
  resetCourseOutline,
  setCourseImage,
} from "@/services/slices/courseOutlineSlice";
import { AppDispatch, RootState } from "@/services/store";
import { courseStateType } from "@/types/courseSliceTypes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editFieldsValues } from "../types";

const useEditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const course = useSelector((store: RootState) =>
    store.course.find((course) => course.id === id),
  );
  const courseImage = useSelector(
    (store: RootState) => store.courseOutline.courseImage,
  );
  const [editFieldsValues, setEditFieldsValues] = useState<editFieldsValues>({
    category: course?.category,
    description: course?.courseDescription,
    title: course?.courseTitle,
  });
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    if (!course) return;
    dispatch(setCourseImage(course.courseImage));
  }, [course]);

  const editCourse = () => {
    if (!course || !editFieldsValues) return;
    setIsPosting(true);
    const updatedCourse: courseStateType = {
      ...course,
      courseTitle: editFieldsValues.title!,
      courseDescription: editFieldsValues.description!,
      category: editFieldsValues.category!,
      courseImage,
    };
    dispatch(updateCourse(updatedCourse)).finally(() => {
      setIsPosting(false);
      navigate("/home");
      dispatch(resetCourseOutline());
    });
  };

  return {
    course,
    editCourse,
    isPosting,
    editFieldsValues,
    setEditFieldsValues,
    courseImage,
  };
};

export default useEditCourse;
