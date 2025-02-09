import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold text-primary md:text-5xl">LUMORA</h1>
      <h6 className="text-lg font-semibold md:text-xl">
        Empower Your Learning with AI-Generated Courses
      </h6>
      <p className="w-7/12 min-w-[280px] text-sm md:text-base">
        Forget generic courses. Lumora’s AI creates personalized learning paths
        tailored to your goals, helping you learn faster and more effectively.
      </p>
      <div className="flex gap-5 [&>*]:max-w-[200px] [&>*]:flex-1">
        <Button>Get Started</Button>
        <Button variant="invert">Explore Courses</Button>
      </div>
    </section>
  );
};

export default Hero;
