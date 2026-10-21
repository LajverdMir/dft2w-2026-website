"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SpeakerCard } from "@/components/speaker-card";
import { SPEAKERS } from "@/features/speakers/index.constants";
import { Frame } from "@/layouts/landing/frame";

const CARD_STEP = 261;

export const Speakers = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  const updateScrollState = () => {
    const node = scrollerRef.current;
    if (!node) {
      return;
    }
    setHasOverflow(node.scrollWidth - node.clientWidth > 4);
  };

  useEffect(() => {
    updateScrollState();
    const node = scrollerRef.current;
    if (!node) {
      return;
    }
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scrollByDirection = (direction: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) {
      return;
    }
    const maxScroll = node.scrollWidth - node.clientWidth;
    if (maxScroll <= 4) {
      return;
    }
    const atStart = node.scrollLeft <= 4;
    const atEnd = node.scrollLeft >= maxScroll - 4;
    if (direction === 1 && atEnd) {
      node.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (direction === -1 && atStart) {
      node.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }
    node.scrollBy({ left: direction * CARD_STEP, behavior: "smooth" });
  };

  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-12" id="speakers">
      <Frame className="flex flex-col gap-8 sm:gap-10">
        <div className="flex items-center gap-4 sm:gap-6">
          <h2 className="shrink-0 text-[22px] font-normal text-black capitalize sm:text-[27px]">
            Speakers
          </h2>
          <div className="h-px flex-1 bg-black" />
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Next speakers"
            disabled={!hasOverflow}
            onClick={() => scrollByDirection(1)}
            className="absolute top-[calc(50%+1.5rem)] right-1 z-10 flex size-[34px] -translate-y-1/2 items-center justify-center disabled:opacity-30 sm:right-0"
          >
            <Image
              unoptimized
              src="/landing/speakers/arrow.svg"
              alt=""
              width={34}
              height={34}
              className="size-[34px]"
            />
          </button>

          <div
            ref={scrollerRef}
            onScroll={updateScrollState}
            className="flex gap-10 overflow-x-auto scroll-smooth px-8 pt-16 pb-2 sm:gap-[83px] sm:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SPEAKERS.map((speaker, index) => (
              <SpeakerCard
                key={speaker.id}
                name={speaker.name}
                role={speaker.role}
                imageSrc={speaker.imageSrc}
                corner={index % 2 === 0 ? "br" : "tl"}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous speakers"
            disabled={!hasOverflow}
            onClick={() => scrollByDirection(-1)}
            className="absolute top-[calc(50%+1.5rem)] left-1 z-10 flex size-[34px] -translate-y-1/2 items-center justify-center disabled:opacity-30 sm:left-0"
          >
            <Image
              unoptimized
              src="/landing/speakers/arrow.svg"
              alt=""
              width={34}
              height={34}
              className="size-[34px] rotate-180"
            />
          </button>
        </div>
      </Frame>
    </section>
  );
};
