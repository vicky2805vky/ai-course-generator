import { getImages } from "@/configs/unsplash";
import { useEffect, useState } from "react";

const Demo = () => {
  const [image, setImage] = useState({ link: "", alt: "" });

  useEffect(() => {
    const fetchImages = async () => {
      const images = await getImages("lamborghini");
      setImage({
        link: images.results[0].links.download,
        alt: images.results[0].slug,
      });
    };
    fetchImages();
  }, []);

  return (
    <div className="space-y-5">
      <img src={image.link} alt={image.alt} />
    </div>
  );
};

export default Demo;
