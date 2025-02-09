import HowItWorksCard from "./HowItWorksCard";

const howItWorksCardContent = [
  {
    title: "Initiate with API Key",
    image: "",
    description:
      "Start by entering your API key to authenticate and connect to Lumora’s powerful features.",
  },
  {
    title: "Input Your Interests",
    image: "",
    description:
      "Tell Lumora what subjects or topics interest you, so we can tailor your learning experience.",
  },
  {
    title: "Confirm the Outline",
    image: "",
    description:
      "Review and confirm your personalized course outline before moving ahead.",
  },
  {
    title: "Let Lumora Generate",
    image: "",
    description:
      "Let Lumora’s AI work its magic and generate a customized course tailored to your needs.",
  },
  {
    title: "Start Learning",
    image: "",
    description:
      "Dive into your personalized course, start learning, and track your progress as you go!",
  },
];

const HowItWorks = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold md:text-3xl">How It works</h2>
      {howItWorksCardContent.map((cardContent, i) => (
        <HowItWorksCard key={i} {...cardContent} cardNumber={i} />
      ))}
    </div>
  );
};

export default HowItWorks;
