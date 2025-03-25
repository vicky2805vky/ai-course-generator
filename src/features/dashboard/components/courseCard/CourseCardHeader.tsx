const CourseCardHeader = ({ courseTitle }: { courseTitle: string }) => {
  return (
    <>
      <img src="/placeholder.webp" alt="" className="mx-auto rounded-lg" />
      <h4 className="text-lg font-bold md:text-xl">{courseTitle}</h4>
    </>
  );
};

export default CourseCardHeader;
