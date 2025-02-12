import { BiCustomize } from "react-icons/bi";
import { FaShareFromSquare } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { TbPuzzle } from "react-icons/tb";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const featureCardsData = [
    {
      title: "AI-Powered Course Generation",
      description:
        "Get personalized courses instantly, designed to match your goals, interests, and learning pace using AI.",
      Icon: LuBrainCircuit,
    },
    {
      title: "Dynamic Learning Path",
      description:
        "Your learning path adapts as you progress, ensuring you're always on track with relevant and updated content.",
      Icon: TbPuzzle,
    },
    {
      title: "Real-Time Customization",
      description:
        "Edit and adjust your courses in real time, giving you full control over your learning experience.",
      Icon: BiCustomize,
    },
    {
      title: "Ready to Share",
      description:
        "Easily share your courses, progress, and achievements with others, making learning collaborative and social.",
      Icon: FaShareFromSquare,
    },
  ];
  return (
    <section className="flex flex-col gap-14">
      <h2 className="text-xl font-bold md:text-3xl">
        Features to Elevate Your Learning
      </h2>
      <div className="flex flex-wrap justify-between gap-14">
        {featureCardsData.map((cardData, i) => (
          <FeatureCard key={i} {...cardData} />
        ))}
      </div>
    </section>
  );
};

export default Features;
