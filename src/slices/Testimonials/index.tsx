import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { createClient } from "@/prismicio";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

const components = {
  heading2: ({ children }: { children: React.ReactNode }) => (
    <Heading size="md" className="text-center mb-9 font-semibold">
      {children}
    </Heading>
  ),
  paragraph: ({ children }: { children: React.ReactNode }) => (
    <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">
      &#8220;{children}&#8221;
    </p>
  ),
};

/**
 * Component for "Testimonials" Slices.
 */
async function Testimonials({
  slice,
}: TestimonialsProps): Promise<JSX.Element> {
  const client = createClient();

  const testimonials = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonial) &&
        item.testimonial.uid
      ) {
        return client.getByUID("testimonial", item.testimonial.uid);
      }
    })
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isFilled.richText(slice.primary.heading) && (
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
      )}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {testimonials.map(
          (item, index) =>
            item && (
              <div
                className="border bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between"
                key={index}
              >
                {isFilled.richText(item.data.quote) && (
                  <PrismicRichText
                    field={item.data.quote}
                    components={components}
                  />
                )}
                <div className="flex">
                  {isFilled.image(item.data.avatar) && (
                    <PrismicNextImage
                      width={56}
                      height={56}
                      field={item.data.avatar}
                      className="rounded-full mr-4"
                      imgixParams={{
                        ar: "1:1",
                        fit: "crop",
                      }}
                    />
                  )}
                  <div>
                    {isFilled.keyText(item.data.name) && (
                      <p className="text-base font-medium text-slate-700">
                        {item.data.name}
                      </p>
                    )}
                    {isFilled.keyText(item.data.company) && (
                      <p className="text-base text-slate-600">
                        {item.data.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </Bounded>
  );
}

export default Testimonials;
