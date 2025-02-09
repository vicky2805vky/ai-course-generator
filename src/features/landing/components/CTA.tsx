import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="flex flex-col gap-5">
      <h6 className="text-balance text-xl font-bold md:text-3xl">
        Ready to start learning?
      </h6>
      <p className="text-sm md:text-lg">
        Unlock personalized courses today and take your learning journey to the
        next level!
      </p>
      <Button className="self-start px-5">Get Started</Button>
    </section>
  );
};

export default CTA;
