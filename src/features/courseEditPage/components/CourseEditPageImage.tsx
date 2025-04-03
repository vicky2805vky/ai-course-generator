import DrawerComponent from "@/components/DrawerComponent";
import SearchImage from "@/components/searchImage/SearchImage";
import { image } from "@/components/searchImage/types";

type CourseEditPageImageProps = {
  courseImage: image;
};

const CourseEditPageImage = ({ courseImage }: CourseEditPageImageProps) => {
  return (
    <div className="flex items-center">
      <DrawerComponent
        title="search image"
        description="choose an image for your course"
        trigger={
          <img
            src={courseImage.url}
            alt={courseImage.alt}
            className="aspect-video w-5/6 min-w-[250px] cursor-pointer rounded-lg object-cover object-center transition hover:brightness-75"
            draggable={false}
          />
        }
      >
        <SearchImage />
      </DrawerComponent>
    </div>
  );
};

export default CourseEditPageImage;
