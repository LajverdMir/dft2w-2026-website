import Image from "next/image";
import { FooterEventCardProps } from "./index.types";

export const FooterEventCard = ({
  title,
  lines,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}: FooterEventCardProps) => {
  return (
    <article className="flex w-full flex-col gap-4 rounded-[10px] bg-white/80 px-5 pt-5 pb-4 sm:pt-6.25 sm:pr-5.5 sm:pb-4.5 sm:pl-7.5 lg:flex-row">
      <div className="flex min-w-0 flex-1 flex-col text-black">
        <h3 className="m-0 text-[20px] font-bold capitalize">{title}</h3>
        {lines.length > 0 ? (
          <p className="mt-2.25 mb-0 text-[11px] font-normal">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        ) : null}
      </div>
      <div className="mt-0 w-full max-w-42.75 shrink-0 self-center overflow-hidden rounded-[5px] lg:w-42.75 lg:self-start xl:w-32">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          sizes="171px"
          className="block h-auto w-full"
        />
      </div>
    </article>
  );
};
