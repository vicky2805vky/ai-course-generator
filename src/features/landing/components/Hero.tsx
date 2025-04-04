import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold text-primary md:text-5xl">
        MAGIC QUILL
      </h1>
      <h6 className="text-lg font-semibold md:text-xl">
        The Pen of Infinite Possibilities.
      </h6>
      <p className="w-7/12 min-w-[280px] text-sm md:text-base">
        Forget generic courses. Magic Quill’s AI creates personalized learning
        paths tailored to your goals, helping you learn faster and more
        effectively.
      </p>
      <div className="flex gap-5 [&>*]:max-w-[200px] [&>*]:flex-1">
        <Link to={"/home"} className={cn(buttonVariants())}>
          Get Started
        </Link>
        <Link
          to={"/explore"}
          className={cn(buttonVariants({ variant: "primaryReverse" }))}
        >
          Explore Courses
        </Link>
      </div>
    </section>
  );
};

export default Hero;
