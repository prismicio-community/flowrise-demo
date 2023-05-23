import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";

export default function Heading({
  field,
}: {
  field: RichTextField;
}): JSX.Element {
  return (
    <PrismicRichText
      field={field}
      components={{
        heading1: ({ children }) => (
          <h1 className="lg:text-7xl md:text-6xl sm:text-5xl font-bold font-display">
            {children}
          </h1>
        ),
        heading2: ({ children }) => (
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl font-bold font-display">
            {children}
          </h2>
        ),
        paragraph: ({ children }) => <p className="">{children}</p>,
      }}
    />
  );
}
