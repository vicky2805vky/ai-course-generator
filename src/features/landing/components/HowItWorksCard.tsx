import { GLASSMORPH_BG } from "@/constants/tailwindConstants";

type howItWorksCardProps = {
  cardNumber: number;
  title: string;
  image: string;
  description: string;
};

const HowItWorksCard = ({
  cardNumber,
  title,
  image,
  description,
}: howItWorksCardProps) => {
  return (
    <section
      className={
        "flex flex-col justify-between gap-5 rounded-lg p-5" + GLASSMORPH_BG
      }
    >
      <div className="flex flex-wrap items-center gap-5">
        <HowItWorksCardTitle
          cardNumber={cardNumber}
          title={title}
          description={description}
        />
        <HowItWorksCardImage image={image} />
        <HowItWorksCardDescription description={description} />
      </div>
    </section>
  );
};

export default HowItWorksCard;

const HowItWorksCardTitle = ({
  cardNumber,
  title,
  description,
}: Partial<howItWorksCardProps>) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex min-w-fit flex-1 gap-5">
        <p className="text-2xl font-bold">0{cardNumber! + 1}</p>
        <h6 className="text-xl font-bold text-primary">{title}</h6>
      </div>
      <p className="hidden max-w-[600px] text-base lg:block">{description}</p>
    </div>
  );
};

const HowItWorksCardImage = ({ image }: Partial<howItWorksCardProps>) => {
  return (
    <div className="flex-1">
      <img
        src={image ? image : "/placeholder.webp"}
        alt=""
        className="mx-auto w-3/12 min-w-[200px] rounded-lg md:mx-0 md:ml-auto"
      />
    </div>
  );
};

const HowItWorksCardDescription = ({
  description,
}: Partial<howItWorksCardProps>) => {
  return <p className="max-w-[600px] text-base lg:hidden">{description}</p>;
};
