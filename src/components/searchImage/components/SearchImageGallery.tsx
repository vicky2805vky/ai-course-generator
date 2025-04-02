import { useDispatch } from "react-redux";
import { image } from "../types";
import { setCourseImage } from "@/services/slices/courseOutlineSlice";
import { DrawerClose } from "@/components/ui/drawer";

type searchImageGalleryProps = { images: image[] };

const SearchImageGallery = ({ images }: searchImageGalleryProps) => {
  const dispatch = useDispatch();
  return (
    <div className="flex h-[50vh] flex-wrap gap-5 overflow-scroll py-5">
      {!images.length && (
        <div className="mx-auto flex flex-col items-center justify-center font-bold">
          <img
            src="/gallery.png"
            alt="searching in web with laptop"
            className="w-7/12 min-w-[200px]"
          />
          <p>Enter keyword to search images</p>
        </div>
      )}
      {images.map((image, i) => {
        return (
          <DrawerClose key={i}>
            <img
              src={image.url}
              alt={image.alt}
              className="aspect-square max-w-[300px] cursor-pointer rounded-lg object-cover"
              onClick={() => {
                dispatch(setCourseImage(image));
              }}
            />
          </DrawerClose>
        );
      })}
    </div>
  );
};

export default SearchImageGallery;
