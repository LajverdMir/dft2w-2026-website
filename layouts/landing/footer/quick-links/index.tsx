import { QUICK_LINKS } from "./index.constants";

export const QuickLinks = () => {
  return (
    <div className="w-full max-w-272.75 capitalize text-white">
      <div className="mb-2.5 flex items-center gap-4 sm:gap-6">
        <div className="h-px flex-1 bg-white" />
        <p className="m-0 shrink-0 text-[13px] font-bold">Quick Links</p>
        <div className="h-px flex-1 bg-white" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-y-2 text-[12px] font-normal sm:text-[13px]">
        {QUICK_LINKS.map((link) => (
          <a
            key={link.href}
            className="text-white no-underline before:mx-2.5 before:content-['|'] first:before:mx-0 first:before:content-none sm:before:mx-4.5"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
