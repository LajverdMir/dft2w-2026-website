import { HeroBackdrop } from "@/components/hero-backdrop";
import { HeroCopy } from "@/features/landing/hero/copy";
import { HeroDates } from "@/features/landing/hero/dates";
import { HeroPillars } from "@/features/landing/hero/pillars";
import { HeroProsperity } from "@/features/landing/hero/prosperity";
import { Frame } from "@/layouts/landing/frame";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-hero">
      <Frame className="relative z-10 flex flex-col justify-between gap-6 pt-6 pb-6 lg:min-h-75 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:pt-6 lg:pb-10">
        <div className="flex max-w-xl min-w-0 flex-col justify-between gap-6 sm:gap-8 lg:min-h-55">
          <HeroCopy />
          <HeroDates />
        </div>
        <div className="min-w-0 w-full lg:w-auto lg:shrink-0">
          <HeroProsperity />
        </div>
      </Frame>
      <HeroBackdrop />
      <div className="relative z-10">
        <HeroPillars />
      </div>
    </section>
  );
};
