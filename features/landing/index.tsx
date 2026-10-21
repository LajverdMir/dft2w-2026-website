import { About } from "@/features/landing/about";
import { Conferences } from "@/features/landing/conferences";
import { DeadlineCard } from "@/features/landing/hero/deadline-card";
import { Glance } from "@/features/landing/glance";
import { Hero } from "@/features/landing/hero";
import { Speakers } from "@/features/landing/speakers";

export const Landing = () => {
  return (
    <main className="w-full">
      <Hero />
      <DeadlineCard />
      <About />
      <Conferences />
      <Glance />
      <Speakers />
    </main>
  );
};
