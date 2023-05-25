import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import { createClient } from "../../prismicio";
import { PrismicDocument } from "@prismicio/client";

export default async function Home() {
  const client = createClient();
  const page: PrismicDocument = await client.getSingle("homepage");
  console.log("🚀 ~ file: page.tsx:8 ~ Home ~ page:", page);

  return (
    <main>
      <SliceZone components={components} slices={page.data.slices} />
    </main>
  );
}
