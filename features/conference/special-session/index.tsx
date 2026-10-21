import { Button } from "@/components/button";
import { Frame } from "@/layouts/landing/frame";
import { ConferenceSpecialSessionProps } from "./index.types";

export const ConferenceSpecialSession = ({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaHref,
}: ConferenceSpecialSessionProps) => {
  return (
    <section className="w-full bg-ink py-12 sm:py-16">
      <Frame className="flex flex-col items-start gap-4">
        <p className="m-0 text-[14px] font-bold tracking-wide text-brand-yellow-glance uppercase sm:text-[16px]">
          {eyebrow}
        </p>
        <h2 className="m-0 text-[24px] font-bold text-white sm:text-[32px]">
          {title}
        </h2>
        <p className="m-0 max-w-3xl text-[14px] leading-relaxed text-white/90 sm:text-[16px]">
          {body}
        </p>
        <Button href={ctaHref} label={ctaLabel} tone="yellow" size="panel" />
      </Frame>
    </section>
  );
};
