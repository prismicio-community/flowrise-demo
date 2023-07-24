import { Metadata, ResolvingMetadata } from "next";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { createClient } from "@/prismicio";

type Props = {
  params: { uid: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const uid = params.uid;

  // fetch data
  const client = createClient();

  const page = await client.getByUID("page", uid);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: page.data.meta_title,
    description: prismic.asText(page.data.meta_description),
    openGraph: {
      images: [page.data.meta_image.url || ""],
    },
  };
}

export default async function Page({ params }: { params: { uid: string } }) {
  const client = createClient();

  const page = await client.getByUID("page", params.uid);

  return <SliceZone components={components} slices={page.data.slices} />;
}
