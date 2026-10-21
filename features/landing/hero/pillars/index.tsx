import { PillarItem } from "@/features/landing/hero/pillar-item";
import { Frame } from "@/layouts/landing/frame";
import { HERO_PILLARS } from "./index.constants";

export const HeroPillars = () => {
  return (
    <div className="relative z-10 w-full bg-brand-blue text-white">
      <Frame className="flex min-h-[68px] min-w-0 flex-col gap-4 py-4 sm:flex-row sm:flex-wrap sm:items-center lg:flex-nowrap lg:gap-4 lg:py-3">
        {HERO_PILLARS.map((item, index) => (
          <div
            key={item.label}
            className={
              index === 0
                ? "w-full lg:contents"
                : "w-full sm:w-[calc(50%-0.5rem)] lg:contents"
            }
          >
            {index === 1 ? (
              <span className="hidden h-12 w-px shrink-0 bg-white lg:block" />
            ) : null}
            <PillarItem
              className={item.className}
              iconClass={item.iconClass}
              iconImageClass={item.iconImageClass}
              iconSrc={item.iconSrc}
              labelClass={item.labelClass}
              label={item.label}
            />
          </div>
        ))}
      </Frame>
    </div>
  );
};
