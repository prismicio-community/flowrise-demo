import { createClient } from "../../prismicio";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";
import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { KeyTextField } from "@prismicio/types";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");
  await console.log(
    "🚀 ~ file: Header.tsx:9 ~ Header ~ settings:",
    settings.data.nav_menu
  );

  return (
    <Bounded as="header" className=" py-4 md:py-6 lg:py-8">
      <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
        <Logo />
        <nav>
          <ul className="flex text-base">
            {settings.data.nav_menu.map(
              ({
                link,
                link_text,
              }: {
                link: LinkField;
                link_text: KeyTextField;
              }) => (
                <ul key={link_text}>
                  <PrismicNextLink className="py-3 px-3" field={link}>
                    {link_text}
                  </PrismicNextLink>
                </ul>
              )
            )}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
