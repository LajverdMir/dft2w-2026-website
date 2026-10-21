import Image from "next/image";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { Frame } from "@/layouts/landing/frame";
import {
  WORKSHOPS_HERO_TITLE_LINE_ONE,
  WORKSHOPS_HERO_TITLE_LINE_TWO,
} from "@/features/workshops/index.constants";

export const WorkshopsHero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-hero">
      <Frame className="relative z-10 flex flex-col justify-center gap-4 py-8 lg:min-h-92">
        <h1 className="m-0 text-[24px] leading-tight font-bold text-brand-yellow uppercase sm:text-[37px]">
          <span className="block">{WORKSHOPS_HERO_TITLE_LINE_ONE}</span>
          <span className="block">{WORKSHOPS_HERO_TITLE_LINE_TWO}</span>
        </h1>
        <div className="flex w-full max-w-lg items-center divide-x divide-black/10 rounded-[10px] bg-white px-3 py-3 sm:px-6 sm:py-4">
          <div className="h-12 w-1/2 pr-2 sm:h-16 sm:pr-3">
            <Image
              unoptimized
              src="/landing/icodt-logo.png"
              alt="ICoDT² IEEE International Conference on Digital and Transformative Technologies"
              width={377}
              height={114}
              className="size-full object-contain"
            />
          </div>
          <div className="h-12 w-1/2 pl-2 sm:h-16 sm:pl-3">
            <Image
              unoptimized
              src="/landing/icdi-logo.png"
              alt="ICDI² AI&ML IEEE International Conference on Development and Innovations in Artificial Intelligence and Machine Learning"
              width={377}
              height={114}
              className="size-full object-contain"
            />
          </div>
        </div>
      </Frame>
      <HeroBackdrop />
    </div>
  );
};
