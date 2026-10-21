import { ComingSoon } from "@/components/coming-soon";
import { Frame } from "@/layouts/landing/frame";
import { ComingSoonPageProps } from "./index.types";

// Placeholder page: just the navbar and footer (from the layout) with the Coming Soon card between them
export const ComingSoonPage = ({ id, title, message }: ComingSoonPageProps) => {
  return (
    <article className="w-full" id={id}>
      <h1 className="sr-only">{title}</h1>
      <Frame className="py-10 sm:py-14 lg:py-20">
        <ComingSoon title={title} message={message} />
      </Frame>
    </article>
  );
};
