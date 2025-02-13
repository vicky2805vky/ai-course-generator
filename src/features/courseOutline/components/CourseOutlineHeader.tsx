import EditButtonComponent from "@/components/EditButtonComponent";

const CourseOutlineHeader = () => {
  return (
    <div className="flex flex-col-reverse gap-5 md:flex-row [&>*]:flex-1">
      <div className="space-y-5">
        <EditButtonComponent>
          <h3 className="text-2xl font-bold text-primary md:text-3xl">
            Course Title
          </h3>
        </EditButtonComponent>
        <EditButtonComponent>
          <h6 className="text-lg font-bold md:text-xl">Description</h6>
        </EditButtonComponent>
        <p className="text-justify text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi atque
          corporis quia repellat iure ex voluptates provident id neque laborum
          modi molestias maiores reprehenderit nihil facilis voluptatibus
          quibusdam, culpa at unde quaerat. Quis repellat ex ipsam aliquam optio
          in quo eum, sint adipisci sapiente itaque laudantium maxime sit
          dolorem! Eaque.
        </p>
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
