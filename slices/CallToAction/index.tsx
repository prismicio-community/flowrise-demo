import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Button from "@/components/Button";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-4xl m-auto shadow-xl p-12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-3xl font-semibold font-display text-center text-slate-700 mb-4">
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.body}
          components={{
            paragraph: ({ children }) => (
              <p className="text-center text-slate-600 mb-8">{children}</p>
            ),
          }}
        />

        <Button
          buttonText={slice.primary.button_text}
          linkField={slice.primary.button_link}
        />
      </div>
    </section>
  );
};

export default CallToAction;
