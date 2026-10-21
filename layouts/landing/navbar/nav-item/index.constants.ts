export const navbarItemLinkClass = (isActive?: boolean) =>
  [
    "relative inline-flex items-center gap-px whitespace-nowrap pb-1 text-[13px] lg:text-[12px] xl:text-[13px] font-normal leading-normal text-white uppercase no-underline",
    "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-brand-green after:transition-transform after:duration-300 after:ease-out after:content-['']",
    isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
  ].join(" ");
