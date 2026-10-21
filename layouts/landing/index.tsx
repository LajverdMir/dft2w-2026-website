import { Footer } from "@/layouts/landing/footer";
import { Navbar } from "@/layouts/landing/navbar";
import { LandingLayoutProps } from "./index.types";

export const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
