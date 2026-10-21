import Image from "next/image";
import {
  VISION_GLANCE_HINT,
  VISION_GLANCE_IMAGE,
  VISION_GLANCE_TITLE,
} from "./index.constants";

export const Vision = () => {
  return (
    <article className="w-full bg-navy" id="about">
      <h1 className="sr-only">{VISION_GLANCE_TITLE}</h1>
      <a
        href={VISION_GLANCE_IMAGE.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${VISION_GLANCE_TITLE} — open full size`}
        className="block"
      >
        <Image
          src={VISION_GLANCE_IMAGE.src}
          alt={VISION_GLANCE_IMAGE.alt}
          width={VISION_GLANCE_IMAGE.width}
          height={VISION_GLANCE_IMAGE.height}
          sizes="100vw"
          preload
          className="block h-auto w-full"
        />
      </a>
      <p className="m-0 px-4 py-2.5 text-center text-[12px] text-white/80 md:hidden">
        {VISION_GLANCE_HINT}
      </p>
    </article>
  );
};
