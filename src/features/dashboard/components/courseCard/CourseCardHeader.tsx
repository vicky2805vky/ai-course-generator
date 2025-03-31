import { image } from "@/components/searchImage/types";

const CourseCardHeader = ({
  courseTitle,
  courseImage,
}: {
  courseTitle: string;
  courseImage: image;
}) => {
  return (
    <>
      <img
        src={courseImage.url}
        alt={courseImage.alt}
        className="mx-auto aspect-video rounded-lg"
      />
      <h4 className="text-lg font-bold md:text-xl">{courseTitle}</h4>
    </>
  );
};

export default CourseCardHeader;
