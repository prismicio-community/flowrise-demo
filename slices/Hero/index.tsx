import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }: { children: React.ReactNode }) => (
    <Heading as="h1" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }: { children: React.ReactNode }) => (
    <p className="max-w-md text-lg font-body text-slate-600">{children}</p>
  ),
};

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className={`grid gap-8 grid-cols-1 place-items-center text-center py-12`}
        >
          {isFilled.richText(slice.primary.heading) && (
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
          )}
          {isFilled.richText(slice.primary.body) && (
            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />
          )}
          {isFilled.link(slice.primary.button_link) &&
            isFilled.keyText(slice.primary.button_text) && (
              <Button
                buttonText={slice.primary.button_text}
                linkField={slice.primary.button_link}
              />
            )}
          {isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              field={slice.primary.image}
              className="rounded-xl drop-shadow-xl max-w-4xl w-full"
            />
          )}
        </section>
      )}

      {slice.variation === "imageOnSide" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className={`grid gap-12 md:grid-cols-2 place-items-center`}
        >
          <div className="grid grid-rows-[1fr,auto,auto] gap-8 h-fit">
            {isFilled.richText(slice.primary.heading) && (
              <Heading field={slice.primary.heading} />
            )}
            {isFilled.richText(slice.primary.body) && (
              <PrismicRichText
                field={slice.primary.body}
                components={{
                  paragraph: ({ children }) => (
                    <p className=" text-lg font-body text-slate-600 max-w-md">
                      {children}
                    </p>
                  ),
                }}
              />
            )}
            {isFilled.link(slice.primary.button_link) &&
              isFilled.keyText(slice.primary.button_text) && (
                <Button
                  buttonText={slice.primary.button_text}
                  linkField={slice.primary.button_link}
                />
              )}
          </div>
          {isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              field={slice.primary.image}
              className="rounded-xl drop-shadow-xl max-w-4xl w-full"
            />
          )}
        </section>
      )}
    </>
  );
};

export default Hero;
