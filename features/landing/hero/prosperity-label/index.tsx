import { ProsperityLabelProps } from "./index.types";

export const ProsperityLabel = ({ className, lines }: ProsperityLabelProps) => {
  return (
    <div className={className}>
      {lines.map((line) => (
        <p key={line} className="m-0">
          {line}
        </p>
      ))}
    </div>
  );
};
