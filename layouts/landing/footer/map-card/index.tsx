import Image from "next/image";
import { Button } from "@/components/button";
import { VENUE_MAPS_HREF } from "@/features/about/index.constants";

export const MapCard = () => {
  return (
    <article className="flex w-full flex-col gap-4 rounded-[10px] bg-white/80 px-5 pt-5 pb-4 sm:pt-6.25 sm:pr-5.5 sm:pb-4.5 sm:pl-7.5 lg:flex-row">
      <div className="flex min-w-0 flex-1 flex-col text-black">
        <h3 className="m-0 text-[20px] font-bold capitalize">LOCATION MAP</h3>
        <p className="mt-2.25 mb-0 text-[11px] font-normal">
          NUST, H-12 Campus
          <br />
          <strong className="text-[11px] font-bold">Islamabad, Pakistan</strong>
        </p>
        <div className="mt-auto pt-6">
          <Button
            href={VENUE_MAPS_HREF}
            label="Virtual Tour"
            tone="blue"
            size="panel"
            external
          />
        </div>
      </div>
      <a
        href={VENUE_MAPS_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open NUST SEECS, H-12 Islamabad in Google Maps"
        className="block w-full max-w-37.75 shrink-0 self-center overflow-hidden transition-shadow hover:ring-2 hover:ring-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none lg:w-37.75 lg:self-start xl:w-32"
      >
        <Image unoptimized
          src="/landing/campus-map.png"
          alt="NUST H-12 campus map"
          width={341}
          height={386}
          className="block h-auto w-full"
        />
      </a>
    </article>
  );
};
