import Image from "next/image";

export const HeroDates = () => {
  return (
    <div className="mt-8 grid grid-cols-[auto_1fr] items-center gap-x-1 gap-y-1 text-[14px] text-white capitalize">
      <div className="size-6.75">
        <Image unoptimized
          src="/landing/icon-calendar.png"
          alt=""
          width={27}
          height={27}
          className="size-full object-contain"
        />
      </div>
      <span className="whitespace-nowrap">Nov 17-18, 2026</span>
      <div className="size-6.75">
        <Image unoptimized
          src="/landing/icon-location.png"
          alt=""
          width={27}
          height={27}
          className="size-full object-contain"
        />
      </div>
      <span className="whitespace-nowrap">NUST, Islamabad Pakistan</span>
    </div>
  );
};
