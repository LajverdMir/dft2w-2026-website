import Image from "next/image";
import { GlanceStat } from "@/features/landing/glance/stat";
import { Frame } from "@/layouts/landing/frame";
import { GLANCE_STATS } from "./index.constants";

export const Glance = () => {
  return (
    <section className="w-full bg-brand-blue py-9" id="about">
      <Frame className="flex max-w-[1012px] flex-col gap-8 lg:flex-row lg:items-end lg:gap-7">
        <div className="flex w-full max-w-64 flex-col gap-4 lg:w-[257px] lg:max-w-none lg:shrink-0">
          <div className="h-18 w-37.75">
            <Image unoptimized
              src="/landing/dftw-logo.png"
              alt="DFT²W"
              width={151}
              height={72}
              className="size-full object-contain"
            />
          </div>
          <h2 className="w-fit border-y border-brand-yellow-glance py-2.5 text-[22px] font-normal text-brand-yellow-glance">
            At a Glance
          </h2>
          <p className="text-[11px] leading-normal font-normal text-white">
            Bringing together global experts, researchers, industry leaders, and
            innovators through inspiring keynotes, insightful panels, hands-on
            workshops, a dynamic Tech Expo, and meaningful networking
            opportunities.
          </p>
        </div>
        <div className="grid min-w-0 w-full grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 lg:max-w-164.5 lg:flex-1 lg:grid-cols-12 lg:gap-[13px]">
          {GLANCE_STATS.map((stat) => (
            <GlanceStat
              key={stat.value + stat.label}
              value={stat.value}
              label={stat.label}
              className={stat.className}
            />
          ))}
        </div>
      </Frame>
    </section>
  );
};
