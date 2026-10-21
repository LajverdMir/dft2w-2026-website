"use client";

import { useEffect, useId, useRef, useState } from "react";
import { REGISTER_MENU_ITEMS, REGISTER_MENU_LABEL } from "./index.constants";
import { RegisterMenuProps } from "./index.types";

export const RegisterMenu = ({ variant }: RegisterMenuProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const isBar = variant === "bar";

  useEffect(() => {
    if (!open) {
      return;
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      data-open={open}
      className={`group/register relative ${isBar ? "" : "w-full"}`}
      onPointerEnter={(event) => {
        if (isBar && event.pointerType === "mouse") {
          setOpen(true);
        }
      }}
      onPointerLeave={(event) => {
        if (isBar && event.pointerType === "mouse") {
          setOpen(false);
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex h-10 items-center justify-center gap-2 rounded-[5px] bg-brand-green px-3 text-[11px] font-normal whitespace-nowrap text-white uppercase transition-colors hover:bg-brand-green-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow group-data-[open=true]/register:bg-brand-green-line sm:min-w-42 sm:text-[13px] lg:min-w-0 lg:gap-1.5 lg:px-2.5 lg:text-[12px] xl:min-w-42 xl:gap-2 xl:px-3 xl:text-[13px] ${
          isBar ? "" : "w-full"
        }`}
      >
        {REGISTER_MENU_LABEL}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="size-3.5 shrink-0 transition-transform duration-300 group-data-[open=true]/register:rotate-180"
        >
          <path
            d="m6 9 6 6 6-6"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={menuId}
        className={
          isBar
            ? "invisible absolute top-full right-0 z-50 w-80 translate-y-1 pt-3 opacity-0 transition duration-200 group-data-[open=true]/register:visible group-data-[open=true]/register:translate-y-0 group-data-[open=true]/register:opacity-100"
            : "invisible grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-data-[open=true]/register:visible group-data-[open=true]/register:grid-rows-[1fr]"
        }
      >
        <div className={isBar ? "" : "min-h-0 overflow-hidden"}>
          <div
            className={`relative flex flex-col gap-1 rounded-[10px] bg-white p-2 font-sans ${
              isBar
                ? "shadow-[0_14px_36px_rgba(1,17,43,0.4)] ring-1 ring-black/5 before:absolute before:-top-1.5 before:right-10 before:size-3 before:rotate-45 before:bg-white before:content-['']"
                : "mt-2"
            }`}
          >
            {REGISTER_MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group/item relative flex items-center gap-3 rounded-lg px-3 py-2.5 no-underline transition-colors hover:bg-card-tint focus-visible:bg-card-tint focus-visible:outline-none"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-green/12 text-brand-green transition-colors group-hover/item:bg-brand-green group-hover/item:text-white">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
                    <path
                      d={item.iconPath}
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[13px] leading-snug font-semibold tracking-wide text-ink uppercase">
                    {item.label}
                  </span>
                  <span className="text-[12px] leading-snug text-black/60">
                    {item.description}
                  </span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="ml-auto size-4 shrink-0 text-black/30 transition group-hover/item:translate-x-0.5 group-hover/item:text-brand-green"
                >
                  <path
                    d="m9 6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
