import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const components = {
  heading2: ({ children }: { children: React.ReactNode }) => (
    <Heading as="h2" size="md" className="text-center mb-12">
      {children}
    </Heading>
  ),
  heading3: ({ children }: { children: React.ReactNode }) => (
    <Heading
      as="h3"
      size="sm"
      className="mb-3 font-medium sm:text-left text-center"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }: { children: React.ReactNode }) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  ),
};

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  const icons = {
    calendar: <CalendarIcon />,
    bargraph: <BarGraphIcon />,
    clover: <CloverIcon />,
    hourglass: <HourglassIcon />,
  };

  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isFilled.richText(slice.primary.heading) && (
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
      )}
      {slice.items && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
          {slice.items.map((item, index) => (
            <div
              key={index}
              className="max-w max-w-xs grid sm:place-items-start place-items-center"
            >
              <div className="mb-5">{icons[item.icon]}</div>

              <PrismicRichText field={item.title} components={components} />

              <PrismicRichText
                field={item.description}
                components={components}
              />
            </div>
          ))}
        </div>
      )}
    </Bounded>
  );
};

export default Features;

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <path
        stroke="#0891B2"
        strokeWidth="4.99"
        d="M6.67 40c0-12.57 0-18.86 3.9-22.76 3.9-3.9 10.2-3.9 22.76-3.9h13.34c12.57 0 18.85 0 22.76 3.9 3.9 3.9 3.9 10.19 3.9 22.76v6.67c0 12.57 0 18.85-3.9 22.76-3.9 3.9-10.2 3.9-22.76 3.9H33.33c-12.57 0-18.85 0-22.76-3.9-3.9-3.9-3.9-10.2-3.9-22.76V40z"
      ></path>
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="4.99"
        d="M23.33 13.33v-5M56.67 13.33v-5M8.33 30h63.34"
      ></path>
      <path
        fill="#0891B2"
        d="M60 56.67a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0zM60 43.33a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0zM43.33 56.67a3.33 3.33 0 11-6.66 0 3.33 3.33 0 016.66 0zM43.33 43.33a3.33 3.33 0 11-6.66 0 3.33 3.33 0 016.66 0zM26.67 56.67a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0zM26.67 43.33a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0z"
      ></path>
    </svg>
  );
}

function BarGraphIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeWidth="4.99"
        d="M73.33 73.33H6.67"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="4.99"
        d="M70 73.33v-25a5 5 0 00-5-5H55a5 5 0 00-5 5v25"
      ></path>
      <path
        stroke="#0891B2"
        strokeWidth="4.99"
        d="M50 73.33V16.67c0-4.72 0-7.07-1.46-8.54C47.07 6.67 44.7 6.67 40 6.67c-4.71 0-7.07 0-8.54 1.46C30 9.6 30 11.95 30 16.67v56.66"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="4.99"
        d="M30 73.33V31.67a5 5 0 00-5-5H15a5 5 0 00-5 5v41.66"
      ></path>
    </svg>
  );
}

function CloverIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="4.99"
        d="M26.67 26.67h26.66v26.66H26.67V26.67z"
      ></path>
      <path
        stroke="#0891B2"
        strokeWidth="4.99"
        d="M53.33 53.34h10a10 10 0 11-10 10v-10zM26.67 53.34h-10a10 10 0 1010 10v-10zM53.33 26.67h10a10 10 0 10-10-10v10zM26.67 26.67h-10a10 10 0 1110-10v10z"
      ></path>
    </svg>
  );
}

function HourglassIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <path
        stroke="#0891B2"
        strokeWidth="4.991"
        d="M49.859 30.237L39.999 40l-9.858-9.763c-9.742-9.647-14.613-14.47-13.249-18.632.117-.358.263-.706.435-1.041C19.335 6.667 26.223 6.667 40 6.667c13.777 0 20.665 0 22.672 3.897.173.335.318.683.436 1.04 1.363 4.162-3.508 8.986-13.25 18.633z"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="4.991"
        d="M30.14 49.763L40 40l9.859 9.763C59.6 59.41 64.47 64.233 63.108 68.395a7.104 7.104 0 01-.436 1.04c-2.007 3.898-8.895 3.898-22.672 3.898-13.777 0-20.665 0-22.673-3.897a7.104 7.104 0 01-.435-1.041c-1.364-4.162 3.507-8.985 13.249-18.632h0z"
      ></path>
    </svg>
  );
}
