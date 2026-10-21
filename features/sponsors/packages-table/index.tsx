import { SponsorIcon } from "@/features/sponsors/icon";
import {
  PACKAGES_TABLE_COLUMNS,
  PACKAGES_TABLE_FOOTNOTE,
  PACKAGES_TABLE_ROWS,
} from "./index.constants";
import { SponsorsPackagesTableProps } from "./index.types";

// Desktop: one table row per package. Tablet: card with PKR / USD / Supports in a row.
// Phone: card with PKR and USD side by side, everything else stacked.
const TABLE_COLUMNS =
  "lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,2.7fr)]";

const LABEL = "text-[10.5px] font-semibold tracking-wide text-white/65 uppercase lg:hidden";

export const SponsorsPackagesTable = ({ title }: SponsorsPackagesTableProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div
        role="table"
        aria-label={title}
        className="flex flex-col gap-4 lg:gap-0 lg:overflow-hidden lg:rounded-[10px] lg:shadow-[0_8px_24px_rgba(1,17,43,0.18)]"
      >
        <div
          role="row"
          className={`hidden bg-[#0b2a66] text-[12px] leading-tight font-bold text-white uppercase lg:grid ${TABLE_COLUMNS}`}
        >
          {Object.values(PACKAGES_TABLE_COLUMNS).map((column, index) => (
            <div
              key={column}
              role="columnheader"
              className={`flex items-center px-3 py-3.5 ${
                index === 0 ? "pl-5" : "justify-center border-l border-white/15 text-center"
              }`}
            >
              {column}
            </div>
          ))}
        </div>

        {PACKAGES_TABLE_ROWS.map((row) => (
          <div
            key={row.id}
            role="row"
            className={`grid grid-cols-2 overflow-hidden rounded-[10px] text-white shadow-[0_4px_14px_rgba(1,17,43,0.18)] sm:grid-cols-3 lg:rounded-none lg:border-t lg:border-white/15 lg:shadow-none ${TABLE_COLUMNS} ${row.rowClass}`}
          >
            <div
              role="rowheader"
              className="col-span-2 flex items-center gap-3 border-b border-white/15 px-4 py-4 sm:col-span-3 lg:col-span-1 lg:border-b-0 lg:pl-5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-white/90">
                <SponsorIcon name={row.icon} className="size-6" />
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="text-[15px] leading-tight font-bold uppercase sm:text-[16px] lg:text-[14px] xl:text-[15px]">
                  {row.name}
                </span>
                {row.note ? (
                  <span className="mt-0.5 text-[12px] text-white/80">{row.note}</span>
                ) : null}
              </div>
            </div>

            <div
              role="cell"
              className="flex flex-col justify-center gap-1 px-4 py-3 lg:items-center lg:border-l lg:border-white/15 lg:px-3 lg:text-center"
            >
              <span className={LABEL}>{PACKAGES_TABLE_COLUMNS.pkr}</span>
              <span className="text-[15px] font-semibold sm:text-[16px] lg:text-[15px]">{row.pkr}</span>
            </div>
            <div
              role="cell"
              className="flex flex-col justify-center gap-1 border-l border-white/15 px-4 py-3 lg:items-center lg:px-3 lg:text-center"
            >
              <span className={LABEL}>{PACKAGES_TABLE_COLUMNS.usd}</span>
              <span className="text-[15px] font-semibold sm:text-[16px] lg:text-[15px]">{row.usd}</span>
            </div>
            <div
              role="cell"
              className="col-span-2 flex flex-col justify-center gap-1 border-t border-white/15 px-4 py-3 sm:col-span-1 sm:border-t-0 sm:border-l lg:items-center lg:px-3 lg:text-center"
            >
              <span className={LABEL}>{PACKAGES_TABLE_COLUMNS.supports}</span>
              <span className="text-[14px] leading-snug">{row.supports}</span>
            </div>
            <div
              role="cell"
              className="col-span-2 flex flex-col justify-center gap-1.5 border-t border-white/15 px-4 py-3 pb-4 sm:col-span-3 lg:col-span-1 lg:border-t-0 lg:border-l lg:px-4"
            >
              <span className={LABEL}>{PACKAGES_TABLE_COLUMNS.benefits}</span>
              <ul className="m-0 flex list-disc flex-col gap-0.5 pl-4.5 text-[13.5px] leading-snug text-white/95 marker:text-brand-yellow lg:text-[13px]">
                {row.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p className="m-0 text-[12px] text-black/65 sm:text-[13px]">{PACKAGES_TABLE_FOOTNOTE}</p>
    </div>
  );
};
