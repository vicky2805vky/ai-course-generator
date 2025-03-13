import { PRIMARY_BG } from "@/constants/tailwindConstants";
import { IconType } from "react-icons";

type featureCardType = {
  title: string;
  description: string;
  Icon: IconType;
};

const FeatureCard = ({ description, Icon, title }: featureCardType) => {
  return (
    <div
      className={`mx-auto flex max-w-[250px] cursor-pointer flex-col gap-3 rounded-xl p-5 ${PRIMARY_BG} group min-w-[250px]`}
    >
      <div
        className={
          "mx-auto -mt-14 w-fit scale-95 rounded-full bg-primary p-4 text-primary-foreground transition-all group-hover:scale-100"
        }
      >
        <Icon className="text-3xl md:text-4xl" />
      </div>
      <h3 className="text-base font-bold md:text-lg">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
