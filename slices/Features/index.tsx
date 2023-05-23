import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />

      {slice.items.map((item, index) => (
        <div key={index}>
          <>{item.icon}</>
          <PrismicRichText field={item.title} />
          <PrismicRichText field={item.description} />
        </div>
      ))}
    </section>
  );
};

export default Features;
