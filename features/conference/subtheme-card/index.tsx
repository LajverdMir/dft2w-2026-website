import Image from "next/image";
import { ConferenceSubthemeCardProps } from "./index.types";

export const ConferenceSubthemeCard = ({
  src,
  label,
}: ConferenceSubthemeCardProps) => {
  return (
    <article className="flex w-full max-w-43 flex-col items-center">
      <div className="flex aspect-square w-full items-center justify-center rounded-[5px] bg-plate p-4 shadow-[2px_4px_4px_1px_rgba(0,0,0,0.25)]">
        <Image unoptimized
          src={src}
          alt=""
          width={146}
          height={138}
          className="size-full max-h-36 object-contain"
        />
      </div>
      <p className="mt-2 text-center text-[14px] font-medium text-black capitalize">
        {label}
      </p>
    </article>
  );
};
