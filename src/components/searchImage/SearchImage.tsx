import SearchImageButtons from "./components/SearchImageButtons";
import SearchImageInput from "./components/SearchImageInput";
import SearchImageGallery from "./components/SearchImageGallery";
import useFetchImage from "./hooks/useFetchImage";

const SearchImage = () => {
  const { currentPage, setCurrentPage, setSearchQuery, totalPages, images } =
    useFetchImage();
  return (
    <div className="mx-5 space-y-5">
      <SearchImageInput
        setCurrentPage={setCurrentPage}
        setSearchQuery={setSearchQuery}
      />
      <SearchImageButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <SearchImageGallery images={images} />
    </div>
  );
};

export default SearchImage;
