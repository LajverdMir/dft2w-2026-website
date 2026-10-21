import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { PlannedWorkshop } from "@/features/workshops/index.types";
import {
  PLANNED_WORKSHOPS,
  PLANNED_WORKSHOPS_INTRO,
  PLANNED_WORKSHOPS_TITLE,
} from "@/features/workshops/index.constants";

type PlannedWorkshopsProps = {
  items?: PlannedWorkshop[];
};

export const PlannedWorkshops = ({
  items = PLANNED_WORKSHOPS,
}: PlannedWorkshopsProps) => {
  return (
    <section className="flex flex-col gap-6" id="planned-workshops">
      <ConferenceSectionHeading title={PLANNED_WORKSHOPS_TITLE} />
      <p className="m-0 max-w-5xl text-[14px] leading-relaxed text-black sm:text-[15px]">
        {PLANNED_WORKSHOPS_INTRO}
      </p>
      <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 lg:grid-cols-2">
        {items.map((workshop) => (
          <li
            key={workshop.title}
            className="flex flex-col gap-2 border border-brand-blue/20 bg-white px-4 py-4 sm:px-5"
          >
            <div className="flex flex-wrap items-start gap-2">
              <h3 className="m-0 text-[15px] leading-snug font-bold text-ink sm:text-[16px]">
                {workshop.title}
              </h3>
              {workshop.tentative ? (
                <span className="rounded-sm bg-brand-yellow/80 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-ink uppercase">
                  Tentative
                </span>
              ) : null}
            </div>
            <p className="m-0 text-[13px] leading-snug text-black sm:text-[14px]">
              <span className="font-semibold text-brand-blue">Instructors: </span>
              {workshop.instructors}
            </p>
            <p className="m-0 text-[13px] leading-snug text-black/80 sm:text-[14px]">
              <span className="font-semibold text-brand-blue">Institution: </span>
              {workshop.institution}
            </p>
            {workshop.note ? (
              <p className="m-0 text-[13px] leading-snug text-black/70">
                {workshop.note}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
};
