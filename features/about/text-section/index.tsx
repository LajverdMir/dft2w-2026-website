import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { AboutTextSectionProps } from "./index.types";

export const AboutTextSection = ({ section }: AboutTextSectionProps) => {
  return (
    <section className="flex flex-col gap-4 sm:gap-5" id={section.id}>
      <ConferenceSectionHeading title={section.title} />
      <div className="flex max-w-5xl flex-col gap-3 text-[14px] leading-relaxed text-black sm:text-[16px]">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="m-0">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
