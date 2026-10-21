import { ConferenceSectionHeadingProps } from "./index.types";

export const ConferenceSectionHeading = ({
  title,
  connector,
}: ConferenceSectionHeadingProps) => {
  return (
    <div className="relative flex w-full items-center gap-3 sm:gap-6">
      {connector}
      <h2 className="m-0 min-w-0 text-[18px] leading-tight font-normal break-words text-black capitalize sm:text-[24px] lg:text-[27px]">
        {title}
      </h2>
      <div className="h-px min-w-8 flex-1 bg-black" />
    </div>
  );
};
