import { HeroBackdrop } from "@/components/hero-backdrop";
import { HeroCopy } from "@/features/landing/hero/copy";
import { HeroDates } from "@/features/landing/hero/dates";
import { Frame } from "@/layouts/landing/frame";

export const SiteHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-hero">
      <Frame className="relative z-10 flex flex-col justify-between gap-6 pt-6 pb-6 lg:min-h-75 lg:justify-center lg:pt-6 lg:pb-10">
        <div className="flex max-w-xl flex-col justify-between gap-8 lg:min-h-55">
          <HeroCopy />
          <HeroDates />
        </div>
      </Frame>
      <HeroBackdrop />
    </section>
  );
};
