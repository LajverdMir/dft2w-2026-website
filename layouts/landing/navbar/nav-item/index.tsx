import { navbarItemLinkClass } from "./index.constants";
import { NavbarItemProps } from "./index.types";

export const NavbarItem = ({
  href,
  label,
  hasMenu,
  isActive,
  items,
}: NavbarItemProps) => {
  if (hasMenu && items?.length) {
    return (
      <div className="group relative inline-flex flex-col lg:flex-row">
        <a className={navbarItemLinkClass(isActive)} href={href}>
          {label}
          <span className="ml-px hidden h-0 w-0 border-x-[3.5px] border-t-4 border-x-transparent border-t-white lg:inline-block" />
        </a>
        <div className="static flex flex-col gap-2 pt-2 pl-3 lg:invisible lg:absolute lg:top-full lg:left-0 lg:z-50 lg:min-w-44 lg:pl-0 lg:opacity-0 lg:transition lg:group-hover:visible lg:group-hover:opacity-100 lg:group-focus-within:visible lg:group-focus-within:opacity-100">
          <div className="rounded-[5px] bg-navy/40 py-1 lg:bg-navy lg:py-2 lg:shadow-lg lg:ring-1 lg:ring-white/10">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-2 py-1.5 text-[13px] font-normal text-white uppercase no-underline hover:bg-white/10 hover:text-brand-yellow lg:px-4 lg:py-2 lg:whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <a className={navbarItemLinkClass(isActive)} href={href}>
      {label}
      {hasMenu ? (
        <span className="ml-px h-0 w-0 border-x-[3.5px] border-t-4 border-x-transparent border-t-white" />
      ) : null}
    </a>
  );
};
