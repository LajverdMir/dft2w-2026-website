import Image from "next/image";
import { PUBLICATION_COPY } from "@/features/conference/index.constants";

export const ConferencePublication = () => {
  return (
    <section className="flex w-full flex-col items-start gap-6 rounded-[5px] bg-brand-blue px-4 py-8 text-white sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
      <div className="max-w-156">
        <p className="m-0 text-[16px] font-bold">PUBLICATION</p>
        <p className="mt-1 mb-0 text-[16px] font-normal">{PUBLICATION_COPY}</p>
      </div>
      <div className="h-18 w-53 shrink-0">
        <Image unoptimized
          src="/conference/ieee-xplore.png"
          alt="IEEE Xplore"
          width={213}
          height={71}
          className="size-full object-contain"
        />
      </div>
    </section>
  );
};
