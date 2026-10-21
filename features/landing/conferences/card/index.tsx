import Image from "next/image";
import { Button } from "@/components/button";
import { ConferenceTrack } from "@/features/landing/conferences/track";
import { ConferenceCardProps } from "./index.types";

export const ConferenceCard = ({
  href,
  className,
  logoSrc,
  logoAlt,
  description,
  tracks,
  ctaLabel,
  ctaTone,
  trackTone,
}: ConferenceCardProps) => {
  return (
    <article
      className={`bg-white flex w-full max-w-120 flex-col items-center rounded-[5px] px-4 pt-5 pb-8 shadow-[8px_7px_10px_1px_rgba(0,0,0,0.25)] sm:px-8 ${className}`}
    >
      <div className="h-28.5 w-full max-w-94">
        <Image unoptimized
          src={logoSrc}
          alt={logoAlt}
          width={377}
          height={114}
          className="size-full object-contain"
        />
      </div>
      <p className="mt-3.5 w-full text-center text-[15px] font-normal text-black capitalize">
        {description}
      </p>
      <div
        className={`conference-track-panel mt-4 flex items-stretch self-center overflow-hidden rounded-[5px] ${trackTone === "icdi" ? "bg-[#933ad5]/10" : "bg-[#0742a4]/10"}`}
      >
        {tracks.map((track) => (
          <ConferenceTrack key={track.label} src={track.src} label={track.label} />
        ))}
      </div>
      <div className="mt-4 w-full flex items-center justify-center">
        <Button href={href} label={ctaLabel} tone={ctaTone} size="card" />
      </div>
    </article>
  );
};
