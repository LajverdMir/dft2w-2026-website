import { SpeakerCard } from "@/components/speaker-card";
import { SpeakerBioRowProps } from "./index.types";

export const SpeakerBioRow = ({ bio, reverse, ...speaker }: SpeakerBioRowProps) => {
  return (
    <div
      className={`flex flex-col items-center gap-8 md:items-start md:gap-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="mx-auto w-fit shrink-0 md:mx-0">
        <SpeakerCard {...speaker} corner={reverse ? "tl" : "br"} />
      </div>
      <div className="flex flex-col gap-4 text-[14px] leading-relaxed text-black sm:text-[15px]">
        {bio.map((paragraph) => (
          <p key={paragraph} className="m-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
