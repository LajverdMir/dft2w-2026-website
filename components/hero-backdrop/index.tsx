import Image from "next/image";
import { HERO_BACKDROP } from "./index.constants";
import { HeroBackdropProps } from "./index.types";

// The hero artwork is a wide 1440×300 panorama. From lg up it sits behind the hero text (only plain
// navy edges get trimmed); below lg it is shown whole as a strip under the text instead of being
// zoomed in, so the globe and people are never cut off.
export const HeroBackdrop = ({ dim = false }: HeroBackdropProps) => {
  return (
    <>
      <Image
        unoptimized
        src={HERO_BACKDROP.src}
        alt=""
        aria-hidden="true"
        fill
        priority
        className={`hidden object-cover lg:block ${dim ? "opacity-40" : ""}`}
      />
      <Image
        unoptimized
        src={HERO_BACKDROP.src}
        alt=""
        aria-hidden="true"
        width={HERO_BACKDROP.width}
        height={HERO_BACKDROP.height}
        className="relative block h-auto w-full lg:hidden"
      />
    </>
  );
};
