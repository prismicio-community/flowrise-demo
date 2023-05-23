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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid md:grid-cols-2 gap-8"
    >
      <div>
        <Heading field={slice.primary.heading} />
        <PrismicRichText field={slice.primary.body} />
        <Button
          buttonText={slice.primary.button_text}
          linkField={slice.primary.button_link}
        />
      </div>
      <PrismicNextImage field={slice.primary.image} />
    </section>
  );
};

export default Hero;
