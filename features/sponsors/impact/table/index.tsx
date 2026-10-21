import { SponsorIcon } from "@/features/sponsors/icon";
import {
  IMPACT_COLUMNS,
  IMPACT_CUSTOM_PRICE,
  IMPACT_PARTNERSHIPS,
  IMPACT_TITLE_LEAD,
  IMPACT_TITLE_MAIN,
} from "@/features/sponsors/impact/index.constants";

// Desktop: one table row per partnership. Phone/tablet: each row becomes a card.
const TABLE_COLUMNS =
  "lg:grid-cols-[minmax(0,2.4fr)_minmax(0,1.2fr)_minmax(0,2fr)_minmax(0,1.8fr)]";

const MOBILE_LABEL =
  "text-[10.5px] font-bold tracking-wide text-brand-blue uppercase lg:hidden";

export const SponsorsImpactTable = () => {
  return (
    <div
      role="table"
      aria-label={`${IMPACT_TITLE_LEAD} ${IMPACT_TITLE_MAIN}`}
      className="flex flex-col gap-4 lg:gap-0 lg:overflow-hidden lg:rounded-[10px] lg:border lg:border-[#0a2a5c]/15 lg:shadow-[0_8px_24px_rgba(1,17,43,0.12)]"
    >
      <div
        role="row"
        className={`hidden bg-[#0a2a5c] text-[12.5px] leading-tight font-bold text-white uppercase lg:grid ${TABLE_COLUMNS}`}
      >
        {Object.values(IMPACT_COLUMNS).map((column, index) => (
          <div
            key={column}
            role="columnheader"
            className={`px-4 py-3.5 ${index === 0 ? "pl-5" : "border-l border-white/15"}`}
          >
            {column}
          </div>
        ))}
      </div>

      {IMPACT_PARTNERSHIPS.map((item, index) => (
        <div
          key={item.id}
          role="row"
          className={`grid grid-cols-1 gap-3 rounded-[10px] border border-[#0a2a5c]/12 p-4 shadow-[0_4px_14px_rgba(1,17,43,0.08)] sm:p-5 lg:gap-0 lg:rounded-none lg:border-0 lg:border-t lg:border-white lg:p-0 lg:shadow-none ${TABLE_COLUMNS} ${
            index % 2 ? "bg-[#f2f8fd]" : "bg-[#e6f2fb]"
          }`}
        >
          <div role="rowheader" className="flex items-center gap-3 lg:py-3 lg:pr-3 lg:pl-5">
            <span
              className={`flex size-11 shrink-0 items-center justify-center rounded-full text-white ${
                index % 2 ? "bg-[#0d4f6e]" : "bg-navy"
              }`}
            >
              <SponsorIcon name={item.icon} className="size-5.5" />
            </span>
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="text-[15px] leading-snug font-bold text-ink lg:text-[14px]">
                {item.name}
              </span>
              <span className="text-[12.5px] leading-snug text-black/60 italic">
                {item.tagline}
              </span>
            </div>
          </div>

          <div
            role="cell"
            className="flex flex-col justify-center gap-1 border-t border-[#0a2a5c]/10 pt-3 lg:border-t-0 lg:border-l lg:border-white lg:p-3 lg:px-4"
          >
            <span className={MOBILE_LABEL}>{IMPACT_COLUMNS.price}</span>
            {item.price ? (
              <span className="text-[16px] leading-snug font-bold text-navy">{item.price}</span>
            ) : (
              <span className="inline-flex w-fit rounded-md bg-brand-yellow-glance px-3 py-1 text-[14px] font-bold text-ink shadow-sm">
                {IMPACT_CUSTOM_PRICE}
              </span>
            )}
          </div>

          <div
            role="cell"
            className="flex flex-col justify-center gap-1 lg:border-l lg:border-white lg:p-3 lg:px-4"
          >
            <span className={MOBILE_LABEL}>{IMPACT_COLUMNS.enables}</span>
            <p className="m-0 text-[13.5px] leading-snug text-black/80 lg:text-[13px]">
              {item.enables}
            </p>
          </div>

          <div
            role="cell"
            className="flex flex-col justify-center gap-1 lg:border-l lg:border-white lg:p-3 lg:px-4"
          >
            <span className={MOBILE_LABEL}>{IMPACT_COLUMNS.highlights}</span>
            <ul className="m-0 flex list-disc flex-col gap-0.5 pl-4.5 text-[13.5px] leading-snug text-black/80 marker:text-brand-blue lg:text-[13px]">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
