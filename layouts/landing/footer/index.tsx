import Image from "next/image";
import { FooterEventCard } from "@/layouts/landing/footer/event-card";
import { ExpoCard } from "@/layouts/landing/footer/expo-card";
import { MapCard } from "@/layouts/landing/footer/map-card";
import { FooterPartners } from "@/layouts/landing/footer/partners";
import { QuickLinks } from "@/layouts/landing/footer/quick-links";
import { Frame } from "@/layouts/landing/frame";
import { FOOTER_EVENT_CARDS } from "./index.constants";

export const Footer = () => {
  return (
    <footer className="w-full overflow-hidden" id="tech-expo">
      <Image
        src="/landing/footer-city.png"
        alt="Islamabad and Baku skyline with the flags of Pakistan and Azerbaijan"
        width={2167}
        height={726}
        sizes="100vw"
        className="mx-auto block h-auto w-full max-w-480"
      />
      <div className="relative mt-[-9vw] bg-brand-blue/95 pt-10 shadow-[0_-40px_80px_40px_rgba(0,102,178,0.55)] sm:pt-12 lg:pt-16 min-[1920px]:-mt-43">
        <Frame className="flex flex-col items-center gap-8 pb-10 sm:gap-10 sm:pb-12">
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
            <ExpoCard />
            {FOOTER_EVENT_CARDS.map((card) => (
              <FooterEventCard
                key={card.title}
                title={card.title}
                lines={card.lines}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                imageWidth={card.imageWidth}
                imageHeight={card.imageHeight}
              />
            ))}
            <MapCard />
          </div>
          <QuickLinks />
          <FooterPartners />
        </Frame>
      </div>
    </footer>
  );
};
