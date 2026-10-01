import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { createClient } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  // projectId: "zjap108d",
  projectId: `${process.env.SANITY_PROJECT_ID}`,
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});
const builder = imageUrlBuilder(client);
// Funkcja do konwertowania obrazu Sanity na URL
export function urlFor(source: Image | SanityImageSource) {
  return builder.image(source);
}
