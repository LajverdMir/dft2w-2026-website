import Image from "next/image";
import Link from "next/link";
import { Frame } from "@/layouts/landing/frame";
import { NavbarNav } from "@/layouts/landing/navbar/nav";
import { RegisterMenu } from "@/layouts/landing/navbar/register-menu";

export const Navbar = () => {
  return (
    <header className="relative w-full bg-navy">
      <Frame className="flex h-20 items-center justify-between gap-3 sm:h-27 sm:gap-6">
        <Link className="h-14 w-28 shrink-0 sm:h-20 sm:w-42.5" href="/">
          <Image unoptimized
            src="/landing/dftw-logo.png"
            alt="DFT²W Digital Futures and Transformative Technologies Week"
            width={170}
            height={81}
            className="size-full object-contain"
            priority
          />
        </Link>
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <NavbarNav />
          <div className="hidden lg:block">
            <RegisterMenu variant="bar" />
          </div>
        </div>
      </Frame>
    </header>
  );
};
