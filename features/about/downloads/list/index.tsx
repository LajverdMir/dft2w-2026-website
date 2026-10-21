import Image from "next/image";
import { Button } from "@/components/button";
import {
  DOWNLOAD_ITEMS,
  DOWNLOADS_BUTTON_LABEL,
  DOWNLOADS_INTRO,
} from "@/features/about/downloads/index.constants";

// Not rendered while Downloads shows "Coming Soon"; render <DownloadsList /> in features/about/downloads to restore it
export const DownloadsList = () => {
  return (
    <>
      <p className="m-0 max-w-5xl text-[14px] leading-relaxed text-black sm:text-[16px]">
        {DOWNLOADS_INTRO}
      </p>
      <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {DOWNLOAD_ITEMS.map((item) => (
          <li
            key={item.id}
            className="flex flex-col overflow-hidden rounded-[5px] border border-brand-blue/20 bg-white shadow-[2px_4px_4px_0_rgba(0,0,0,0.1)]"
          >
            <div
              className={`relative aspect-4/3 w-full overflow-hidden ${item.darkPreview ? "bg-navy" : "bg-plate"}`}
            >
              <Image
                src={item.href}
                alt={`${item.title} preview`}
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                className="object-contain p-3"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 px-4 py-4 sm:px-5">
              <h3 className="m-0 text-[16px] leading-snug font-bold text-ink sm:text-[17px]">
                {item.title}
              </h3>
              <p className="m-0 text-[13px] leading-snug text-black/80 sm:text-[14px]">
                {item.description}
              </p>
              <p className="m-0 text-[12px] font-semibold tracking-wide text-brand-blue uppercase">
                {item.format} · {item.size}
              </p>
              <div className="mt-auto pt-3">
                <Button
                  href={item.href}
                  label={DOWNLOADS_BUTTON_LABEL}
                  tone="blue"
                  size="panel"
                  download={item.fileName}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
