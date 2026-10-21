import Image from "next/image";
import { SpeakerCardProps } from "./index.types";

export const SpeakerCard = ({
  name,
  role,
  imageSrc,
  corner,
}: SpeakerCardProps) => {
  const radiusClass =
    corner === "br" ? "rounded-br-[50px]" : "rounded-tl-[50px]";

  return (
    <article
      className={`relative flex w-48 shrink-0 flex-col overflow-visible bg-plate shadow-[4px_5px_4px_0_rgba(0,0,0,0.25)] ${radiusClass}`}
    >
      <div className="relative -mt-14 h-72.5 w-full shrink-0 overflow-hidden">
        <Image
          unoptimized
          src={imageSrc}
          alt={name}
          width={198}
          height={268}
          className="size-full object-cover object-[center_15%]"
        />
      </div>
      <div className="px-2.5 pt-2 pb-4 text-center capitalize text-black">
        <p className="m-0 text-[15px] font-bold leading-snug">{name}</p>
        <p className="mt-0.5 mb-0 text-[14px] leading-snug font-light whitespace-pre-line">
          {role}
        </p>
      </div>
    </article>
  );
};
