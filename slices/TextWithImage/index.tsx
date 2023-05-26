import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Heading } from "@/components/Heading";

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

const components = {
  heading2: ({ children }: { children: React.ReactNode }) => (
    <Heading as="h2" size="lg" className="mb-12">
      {children}
    </Heading>
  ),
};

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid gap-8 md:grid-cols-2 place-items-center py-12"
    >
      <div
        className={`grid gap-4 ${slice.variation === "default" && "order-2"}`}
      >
        {isFilled.richText(slice.primary.heading) && (
          <PrismicRichText
            components={components}
            field={slice.primary.heading}
          />
        )}
        {isFilled.richText(slice.primary.body) && (
          <PrismicRichText
            field={slice.primary.body}
            components={{
              paragraph: ({ children }) => (
                <p className="max-w-md text-lg font-body text-slate-600">
                  {children}
                </p>
              ),
            }}
          />
        )}
      </div>
      {isFilled.image(slice.primary.image) && (
        <PrismicNextImage field={slice.primary.image} />
      )}
    </section>
  );
};

export default TextWithImage;
