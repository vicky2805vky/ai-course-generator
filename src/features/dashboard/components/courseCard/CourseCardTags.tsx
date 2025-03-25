const CourseCardTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="!justify-start gap-3">
      {tags.map((tag, i) => {
        return (
          <p className="rounded-full bg-primary p-1 px-3 text-[10px]" key={i}>
            {tag}
          </p>
        );
      })}
    </div>
  );
};

export default CourseCardTags;
