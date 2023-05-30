import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import { LinkField, KeyTextField } from "@prismicio/client";

export default function Button({
  linkField,
  className,
  buttonText,
}: {
  linkField: LinkField;
  className?: string;
  buttonText: KeyTextField;
}) {
  return (
    <PrismicNextLink
      field={linkField}
      className={clsx(
        "block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12  rounded-full font-display text-white font-bold text-base",
        className
      )}
    >
      {buttonText}
    </PrismicNextLink>
  );
}
