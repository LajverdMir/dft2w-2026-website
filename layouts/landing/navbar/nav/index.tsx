"use client";

import { useEffect, useState } from "react";
import { NavbarItem } from "@/layouts/landing/navbar/nav-item";
import { RegisterMenu } from "@/layouts/landing/navbar/register-menu";
import { NAVBAR_ITEMS } from "./index.constants";

export const NavbarNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[5px] border border-white/30 text-white lg:hidden"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Menu</span>
        <span className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </span>
      </button>

      <nav
        className={`${
          open ? "flex" : "hidden"
        } absolute top-20 right-0 left-0 z-50 max-h-[calc(100dvh-5rem)] flex-col gap-4 overflow-y-auto bg-navy px-4 py-6 shadow-lg sm:top-27 sm:max-h-[calc(100dvh-6.75rem)] sm:px-6 lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-3.5 xl:gap-5.25 lg:overflow-visible lg:bg-transparent lg:p-0 lg:shadow-none font-nav`}
        onClick={(event) => {
          const target = event.target as HTMLElement;
          if (target.closest("a")) {
            setOpen(false);
          }
        }}
      >
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem
            key={item.label}
            href={item.href}
            label={item.label}
            hasMenu={item.hasMenu}
            isActive={item.isActive}
            items={item.items}
          />
        ))}
        <div className="lg:hidden">
          <RegisterMenu variant="drawer" />
        </div>
      </nav>
    </>
  );
};
