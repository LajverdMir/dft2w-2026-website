"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Frame } from "@/layouts/landing/frame";

const DEADLINES = [
  { label: "Paper Submission Deadline", date: "July 31, 2026", top: "23.24%" },
  {
    label: "Notification of Acceptance",
    date: "August 31, 2026",
    top: "39.76%",
  },
  { label: "Camera-Ready Submission", date: "Sep 21, 2026", top: "55.96%" },
  { label: "Early Registration Deadline", date: "Oct 15, 2026", top: "72.78%" },
];

export const DeadlineCard = () => {
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  useEffect(() => {
    if (!isPosterOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPosterOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPosterOpen]);

  return (
    <>
      <div className="min-[1800px]:hidden">
        <Frame className="py-6">
          <section
            aria-label="Important dates"
            className="flex flex-col gap-4 rounded-[10px] bg-dates-panel p-4 shadow-[1px_4px_12px_rgba(0,0,0,0.12)] sm:p-5 lg:flex-row lg:items-center lg:gap-6"
          >
            <div className="flex items-center gap-3 lg:w-32 lg:shrink-0 lg:flex-col lg:items-start lg:gap-2">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f04e23] text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="size-5"
                >
                  <path
                    d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h2 className="m-0 text-[16px] leading-tight font-bold text-black uppercase">
                Important Dates
              </h2>
            </div>
            <dl className="m-0 grid flex-1 grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
              {DEADLINES.map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-[#f04e23]/50 pl-3"
                >
                  <dt className="text-[11.5px] leading-tight font-semibold text-black/70 capitalize">
                    {item.label}
                  </dt>
                  <dd className="m-0 mt-1 text-[14.5px] leading-tight font-bold text-black">
                    {item.date}
                  </dd>
                </div>
              ))}
            </dl>
            <button
              type="button"
              onClick={() => setIsPosterOpen(true)}
              className="h-11 shrink-0 rounded-[10px] bg-[#cef6ff] px-5 text-[14px] font-bold text-black shadow-[1px_4px_4px_0px_rgba(0,0,0,0.15)]"
              aria-label="Open DFT²W at a Glance poster"
            >
              DFT²W at a Glance
            </button>
          </section>
        </Frame>
      </div>
      <div className="deadline-card-anchor top-0 hidden min-[1800px]:block">
        <div className="relative aspect-240/327 w-60">
          <div className="absolute top-0 left-0 z-20 h-[21.41%] w-[29.17%] rotate-90">
            <Image
              unoptimized
              src="/landing/deadline/arrow-icon.svg"
              alt="Back"
              width={70}
              height={70}
              className="size-full"
            />
          </div>

          <div className="absolute top-[3.67%] right-0 bottom-[13.15%] left-[4.17%] z-0">
            <Image
              unoptimized
              src="/landing/deadline/card-shape.svg"
              alt=""
              width={230}
              height={272}
              className="size-full object-fill"
            />
          </div>

          {DEADLINES.map((item, index) => (
            <div
              key={item.label}
              className="absolute left-[24.58%] z-10 w-[65%] text-black"
              style={{ top: item.top }}
            >
              <h3 className="m-0 text-[9px] leading-tight font-bold capitalize sm:text-[10px]">
                {item.label}
              </h3>
              <p className="m-0 text-[11px] leading-tight sm:text-[12px]">
                {item.date}
              </p>
              {index < DEADLINES.length - 1 ? (
                <div className="mt-1.5 h-px w-[95%] bg-black" />
              ) : null}
            </div>
          ))}

          <button
            type="button"
            onClick={() => setIsPosterOpen(true)}
            className="absolute top-[86.85%] right-[0.42%] bottom-0 left-[4.17%] z-10 flex items-center justify-center rounded-[10px] bg-[#cef6ff] shadow-[1px_4px_4px_0px_rgba(0,0,0,0.25)]"
            aria-label="Open DFT²W at a Glance poster"
          >
            <span className="text-[14px] font-bold text-black">
              DFT²W at a Glance
            </span>
          </button>
        </div>
      </div>

      {isPosterOpen ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="DFT²W at a Glance poster"
          onClick={() => setIsPosterOpen(false)}
        >
          <div
            className="relative max-h-full max-w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/conference/poster.png"
              alt="DFT²W at a Glance poster"
              width={1200}
              height={1600}
              className="max-h-[calc(100vh-2rem)] w-auto max-w-[calc(100vw-2rem)] object-contain"
            />
            <button
              type="button"
              onClick={() => setIsPosterOpen(false)}
              className="absolute top-2 right-2 flex size-10 items-center justify-center rounded-full bg-white text-3xl leading-none text-black shadow-md"
              aria-label="Close poster"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
