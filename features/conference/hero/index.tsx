import Image from "next/image";
import { ConferenceHeroProps } from "./index.types";

export const ConferenceHero = ({ heroSrc, heroAlt }: ConferenceHeroProps) => {
  return (
    <div className="w-full overflow-hidden bg-navy">
      <Image unoptimized
        src={heroSrc}
        alt={heroAlt}
        width={1440}
        height={371}
        sizes="100vw"
        className="block h-auto w-full"
        priority
      />
    </div>
  );
};
