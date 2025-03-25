const CourseCardDetails = ({
  duration,
  Totalchapters,
}: {
  duration: string;
  Totalchapters: number;
}) => {
  return (
    <div className="text-sm md:text-base">
      <p>{duration}</p>
      <p>{Totalchapters} chapters</p>
    </div>
  );
};
export default CourseCardDetails;
