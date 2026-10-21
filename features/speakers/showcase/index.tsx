"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { SPEAKERS } from "@/features/speakers/index.constants";

export const SpeakersShowcase = () => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const activeId = hoverId ?? openId;

  const toggle = (id: string, card: HTMLElement | null) => {
    const willOpen = activeId !== id;
    setHoverId(null);
    setOpenId(willOpen ? id : null);

    const row = rowRef.current;
    if (willOpen && card && row && row.scrollWidth > row.clientWidth) {
      // On small screens the row scrolls sideways; bring the opened card into view
      window.setTimeout(() => {
        row.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
      }, 350);
    }
  };

  return (
    <div
      ref={rowRef}
      data-idle={activeId === null}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          setHoverId(null);
        }
      }}
      className="speaker-row relative -mx-4 flex gap-4 overflow-x-auto px-4 pt-1 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-1"
    >
      {SPEAKERS.map((speaker) => {
        const isOpen = activeId === speaker.id;
        const bioId = `speaker-bio-${speaker.id}`;

        return (
          <article
            key={speaker.id}
            data-open={isOpen}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") {
                setHoverId(speaker.id);
              }
            }}
            className="speaker-card group/card relative flex h-120 flex-row overflow-hidden rounded-xl bg-white shadow-[4px_6px_14px_rgba(0,0,0,0.18)] data-[open=true]:flex-col lg:h-128 lg:data-[open=true]:flex-row"
          >
            <div className="speaker-photo relative shrink-0 overflow-hidden bg-plate">
              <Image
                unoptimized
                src={speaker.imageSrc}
                alt={speaker.name}
                fill
                className="object-cover object-[center_22%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy via-navy/75 to-transparent px-4 pt-16 pr-14 pb-4 text-white transition-opacity duration-300 group-data-[open=true]/card:opacity-0 lg:group-data-[open=true]/card:opacity-100">
                <p className="m-0 text-[17px] leading-snug font-bold">
                  {speaker.name}
                </p>
                <p className="mt-1 mb-0 text-[12.5px] leading-snug whitespace-pre-line text-white/85">
                  {speaker.role}
                </p>
              </div>
            </div>

            <div className="speaker-bio min-h-0 min-w-0 flex-1 overflow-hidden bg-white">
              <div
                id={bioId}
                className="speaker-bio-inner flex h-full flex-col gap-3 overflow-y-auto py-5 pr-15 pl-5"
              >
                <p className="m-0 text-[12px] font-bold tracking-wide text-brand-blue uppercase">
                  Speaker
                </p>
                <h3 className="m-0 text-[18px] leading-snug font-bold text-ink">
                  {speaker.name}
                </h3>
                <p className="m-0 border-b border-black/10 pb-3 text-[13px] leading-snug whitespace-pre-line text-black/70">
                  {speaker.role}
                </p>
                {speaker.bio.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="m-0 text-[13.5px] leading-relaxed text-black"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={bioId}
              aria-label={isOpen ? `Close ${speaker.name}'s bio` : `Read ${speaker.name}'s bio`}
              onClick={(event) => toggle(speaker.id, event.currentTarget.closest("article"))}
              className="absolute inset-y-0 right-0 z-10 flex w-11 flex-col items-center justify-center gap-4 bg-brand-blue text-white transition-colors hover:bg-[#0a52c9] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand-yellow"
            >
              <span className="rotate-180 text-[11px] font-semibold tracking-[0.2em] uppercase [writing-mode:vertical-rl]">
                {isOpen ? "Close" : "Read Bio"}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="speaker-chevron size-6"
                aria-hidden="true"
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </article>
        );
      })}
    </div>
  );
};
