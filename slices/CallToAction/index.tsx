import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      as={"section"}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">
        {isFilled.richText(slice.primary.heading) && (
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading2: ({ children }) => (
                <Heading size="sm" className="font-semibold text-center mb-4">
                  {children}
                </Heading>
              ),
            }}
          />
        )}
        {isFilled.richText(slice.primary.body) && (
          <PrismicRichText
            field={slice.primary.body}
            components={{
              paragraph: ({ children }) => (
                <p className="text-center text-slate-600 mb-8">{children}</p>
              ),
            }}
          />
        )}
        {isFilled.keyText(slice.primary.button_text) &&
          isFilled.link(slice.primary.button_link) && (
            <Button
              buttonText={slice.primary.button_text}
              linkField={slice.primary.button_link}
            />
          )}
      </div>
    </Bounded>
  );
};

export default CallToAction;
