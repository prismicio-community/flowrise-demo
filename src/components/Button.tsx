import { PrismicNextLink } from "@prismicio/next";
import { LinkField, KeyTextField } from "@prismicio/client";

export default function Button({
  linkField,
  buttonText,
}: {
  linkField: LinkField;
  buttonText: KeyTextField;
}) {
  return (
    <PrismicNextLink
      field={linkField}
      className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12  rounded-full font-display text-white font-bold text-base"
    >
      {buttonText}
    </PrismicNextLink>
  );
}
