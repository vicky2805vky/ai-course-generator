import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CoursePage = () => {
  return (
    <div className="space-y-5">
      <h6 className="text-2xl font-bold">Chapter 1</h6>
      <img
        src="/placeholder.webp"
        alt=""
        className="mx-auto w-4/12 min-w-[250px] rounded-lg"
      />
      <div className="space-y-3">
        <h6 className="text-xl font-bold">Lesson 1</h6>
        <p className="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          nostrum laboriosam possimus nulla blanditiis mollitia optio quis
          labore reprehenderit molestiae tempora aperiam incidunt provident at,
          deleniti vitae ducimus rem voluptatum voluptates. Odio quae assumenda
          ratione repellendus quas eius fugiat illo, pariatur reprehenderit
          repellat iste perferendis perspiciatis et odit quasi nobis?
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Button>
          <ChevronLeft /> Previous
        </Button>
        <Button>
          Next <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default CoursePage;
