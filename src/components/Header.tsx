import Link from "next/link";
import { LinkField, KeyTextField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

import { createClient } from "@/prismicio";
import Logo from "@/components/Logo";
import Bounded from "@/components/Bounded";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="header" className=" py-4 md:py-6 lg:py-8">
      <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
        <Link href="/">
          <Logo />
        </Link>
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
