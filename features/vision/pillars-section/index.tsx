import { VisionPillarCard } from "@/features/vision/pillar-card";
import { Frame } from "@/layouts/landing/frame";
import {
  VISION_MISSION_CHALLENGE,
  VISION_MISSION_CLOSE,
  VISION_MISSION_LEAD,
  VISION_MISSION_TITLE,
  VISION_MISSION_TITLE_LINE,
  VISION_PILLARS,
} from "@/features/vision/index.constants";

export const VisionPillarsSection = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-10" id="strategic-pillars">
      <Frame>
        <div className="overflow-hidden rounded-t-[18px] border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-t-[24px]">
          <div className="flex flex-col gap-6 bg-vision-navy px-5 py-7 text-white sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:gap-10 lg:px-10 lg:py-9">
            <h2 className="m-0 shrink-0 text-[32px] leading-[1.05] font-bold uppercase sm:text-[38px] lg:max-w-72 lg:text-[42px]">
              <span className="block">{VISION_MISSION_TITLE}</span>
              <span className="mt-1 block text-[22px] leading-[1.1] font-bold sm:text-[26px] lg:text-[28px]">
                {VISION_MISSION_TITLE_LINE}
              </span>
            </h2>
            <div className="min-w-0 flex-1 text-[13px] leading-relaxed sm:text-[14px] lg:text-[15px]">
              <p className="m-0">
                <span className="font-medium text-brand-yellow">
                  {VISION_MISSION_LEAD}{" "}
                </span>
                <span className="font-bold text-white">
                  {VISION_MISSION_CHALLENGE}
                </span>
              </p>
              <p className="mt-3 mb-0 font-normal text-white">
                {VISION_MISSION_CLOSE}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {VISION_PILLARS.map((pillar, index) => (
              <VisionPillarCard
                key={pillar.id}
                id={pillar.id}
                number={pillar.number}
                title={pillar.title}
                subtitle={pillar.subtitle}
                tone={pillar.tone}
                focusAreas={pillar.focusAreas}
                events={pillar.events}
                href={pillar.href}
                isLast={index === VISION_PILLARS.length - 1}
              />
            ))}
          </div>
        </div>
      </Frame>
    </section>
  );
};
