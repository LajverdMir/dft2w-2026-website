import { ConferenceCard } from "@/features/landing/conferences/card";
import { Frame } from "@/layouts/landing/frame";
import { CONFERENCE_CARDS } from "./index.constants";

export const Conferences = () => {
  return (
    <section className="relative w-full bg-brand-gray py-12" id="conferences">
      <Frame className="flex flex-col items-center gap-10">
        <h2 className="text-center text-[22px] font-bold text-ink capitalize sm:text-[27px]">
          Two Flagship Conferences, One Transformative Week
        </h2>
        <div className="flex w-full flex-wrap items-stretch justify-center gap-8">
          {CONFERENCE_CARDS.map((card) => (
            <ConferenceCard
              key={card.variant}
              href={card.href}
              variant={card.variant}
              className={card.className}
              logoSrc={card.logoSrc}
              logoAlt={card.logoAlt}
              description={card.description}
              tracks={card.tracks}
              ctaLabel={card.ctaLabel}
              ctaTone={card.ctaTone}
              trackTone={card.trackTone}
            />
          ))}
        </div>
      </Frame>
    </section>
  );
};
