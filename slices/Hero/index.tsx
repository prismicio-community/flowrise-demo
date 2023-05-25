"use client";

import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  PrismicLink,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

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
          <Heading field={slice.primary.heading} />
          <PrismicRichText field={slice.primary.body} />
          <Button
            buttonText={slice.primary.button_text}
            linkField={slice.primary.button_link}
          />

          <PrismicNextImage
            field={slice.primary.image}
            className="rounded-xl drop-shadow-xl max-w-4xl"
          />
        </section>
      )}

      {slice.variation === "imageOnSide" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className={`grid gap-8 md:grid-cols-2 place-items-center`}
        >
          <div className="grid  grid-rows-[1fr,auto,auto] gap-8 h-fit">
            <Heading field={slice.primary.heading} />
            <PrismicRichText field={slice.primary.body} />
            <Button
              buttonText={slice.primary.button_text}
              linkField={slice.primary.button_link}
            />
          </div>
          <PrismicNextImage field={slice.primary.image} />
        </section>
      )}
    </>
  );
};

export default Hero;
