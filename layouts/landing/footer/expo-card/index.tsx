import Image from "next/image";
import { Button } from "@/components/button";
import { REGISTRATION_FORM_HREF } from "@/features/registration/index.constants";

export const ExpoCard = () => {
  return (
    <article className="flex w-full flex-col gap-4 rounded-[10px] bg-white/80 px-5 pt-5 pb-4 sm:pt-6.25 sm:pr-5.5 sm:pb-4.5 sm:pl-7.5 lg:flex-row">
      <div className="flex min-w-0 flex-1 flex-col text-black">
        <h3 className="m-0 text-[20px] font-bold capitalize">TECH EXPO 2026</h3>
        <p className="mt-2.25 mb-0 text-[11px] font-normal">
          Showcasing Innovations.
          <br />
          Connecting Futures.
        </p>
        <a
          className="mt-1 inline-flex items-center text-[11px] font-bold text-black no-underline"
          href="#tech-expo"
        >
          Learn More
          <Image
            src="/landing/arrow-right.svg"
            alt=""
            width={16}
            height={16}
            className="ml-1"
            unoptimized
          />
        </a>
        <div className="mt-auto pt-6">
          <Button
            href={REGISTRATION_FORM_HREF}
            label="Register/Participate"
            tone="green-deep"
            size="panel"
            external
          />
        </div>
      </div>
      <div className="mt-0 w-full max-w-42.75 shrink-0 self-center overflow-hidden lg:w-42.75 lg:self-start xl:w-32">
        <Image unoptimized
          src="/landing/tech-expo.png"
          alt="Tech Expo exhibition floor"
          width={171}
          height={105}
          className="block h-auto w-full"
        />
      </div>
    </article>
  );
};
