import { LandingLayout } from "@/layouts/landing";

export default function Layout({ children }: LayoutProps<"/">) {
  return <LandingLayout>{children}</LandingLayout>;
}
