import { SliceZone } from "@prismicio/react";

import { components } from "../../../slices";
import { createClient } from "../../../prismicio";

export default async function Page({ params }: { params: { uid: string } }) {
  const client = createClient();

  const page = await client.getByUID("page", params.uid);

  return (
    <main>
      <SliceZone components={components} slices={page.data.slices} />
    </main>
  );
}
