import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();

  const page = await client.getSingle("homepage");

  return (
    <main>
      <SliceZone components={components} slices={page.data.slices} />
    </main>
  );
}
