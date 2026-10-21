import { ComingSoonProps } from "./index.types";

export const ComingSoon = ({ title, message }: ComingSoonProps) => {
  return (
    <section className="flex w-full flex-col items-center gap-5 rounded-[10px] border border-brand-blue/20 bg-[#f4f7ff] px-5 py-12 text-center sm:py-16">
      <div className="flex size-28 items-center justify-center rounded-full bg-brand-blue shadow-[0_8px_24px_rgba(7,66,164,0.35)] sm:size-32">
        <svg viewBox="0 0 48 48" className="size-20 sm:size-24" aria-hidden="true">
          <circle cx="24" cy="24" r="20" fill="white" />
          <circle cx="24" cy="24" r="20" fill="none" stroke="#ffdb35" strokeWidth="2.5" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line
              key={angle}
              x1="24"
              y1="6.5"
              x2="24"
              y2={angle % 90 === 0 ? 10 : 8.5}
              stroke="#01112b"
              strokeWidth={angle % 90 === 0 ? 1.6 : 1}
              strokeLinecap="round"
              transform={`rotate(${angle} 24 24)`}
            />
          ))}
          <line
            x1="24"
            y1="24"
            x2="24"
            y2="15"
            stroke="#01112b"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="origin-center animate-[spin_60s_linear_infinite] motion-reduce:animate-none"
          />
          <line
            x1="24"
            y1="24"
            x2="24"
            y2="10.5"
            stroke="#0742a4"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="origin-center animate-[spin_5s_linear_infinite] motion-reduce:animate-none"
          />
          <circle cx="24" cy="24" r="1.8" fill="#1d9f3e" />
        </svg>
      </div>
      <p className="m-0 text-[13px] font-bold tracking-[0.2em] text-brand-blue uppercase sm:text-[14px]">
        {title}
      </p>
      <h2 className="m-0 text-[30px] leading-tight font-bold text-ink uppercase sm:text-[40px]">
        Coming Soon
      </h2>
      <p className="m-0 max-w-xl text-[14px] leading-relaxed text-black/75 sm:text-[16px]">
        {message}
      </p>
    </section>
  );
};
