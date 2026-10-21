import Image from "next/image";
import { Frame } from "@/layouts/landing/frame";
import { AboutHeroProps } from "./index.types";

export const AboutHero = ({
  src,
  alt,
  width,
  height,
  title,
  eyebrow,
  variant,
}: AboutHeroProps) => {
  return (
    <div className="relative w-full bg-navy">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="100vw"
        preload
        className="block h-auto w-full"
      />
      {variant === "banner" ? (
        <h1 className="sr-only">{title}</h1>
      ) : (
        <div className="md:absolute md:inset-0 md:bg-linear-to-r md:from-navy/90 md:via-navy/55 md:to-navy/10">
          <Frame className="flex h-full flex-col justify-center gap-1 py-5 md:gap-2 md:py-8">
            {eyebrow ? (
              <p className="m-0 text-[13px] font-semibold tracking-wide text-white uppercase sm:text-[16px]">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="m-0 max-w-2xl text-[24px] leading-tight font-bold text-brand-yellow uppercase sm:text-[30px] lg:text-[37px]">
              {title}
            </h1>
          </Frame>
        </div>
      )}
    </div>
  );
};
