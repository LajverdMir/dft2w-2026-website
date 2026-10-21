import Image from "next/image";

export const FooterPartners = () => {
  return (
    <div className="flex h-auto min-h-27.25 w-full max-w-180 flex-wrap items-center justify-center gap-4 bg-[url('/landing/footer-band.svg')] bg-center bg-no-repeat bg-[length:100%_100%] px-10 py-4 sm:gap-6.25 sm:px-16">
      <div className="h-10.75 w-24 sm:w-32">
        <Image unoptimized
          src="/landing/ieee-logo.png"
          alt="IEEE"
          width={128}
          height={43}
          className="size-full object-contain"
        />
      </div>
      <div className="h-11 w-24 sm:w-32.5">
        <Image unoptimized
          src="/landing/nust-logo.png"
          alt="NUST SEECS"
          width={130}
          height={44}
          className="size-full object-contain"
        />
      </div>
      <div className="h-11.25 w-20 sm:w-23">
        <Image unoptimized
          src="/landing/aztu-logo.png"
          alt="Azerbaijan Technical University"
          width={92}
          height={45}
          className="size-full object-contain"
        />
      </div>
      <div className="flex h-11.25 w-28 items-center justify-center overflow-hidden rounded-[5px] bg-white sm:w-30">
        <Image
          src="/sponsors/emrchains.jpg"
          alt="EMRCHAINS — Making Healthcare Personalized"
          width={1080}
          height={430}
          sizes="120px"
          className="size-full object-contain"
        />
      </div>
    </div>
  );
};
