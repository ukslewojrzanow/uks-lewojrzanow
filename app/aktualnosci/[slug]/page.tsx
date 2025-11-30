import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export const metadata = {
  title: "Aktualności",
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <div className="container post-box min-h-[90vh]">
      <div className="comeback">
        <Link href="/aktualnosci" className="hover:underline comeback">
          ← Wróć do aktualności
        </Link>
      </div>
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          width="550"
          height="310"
          quality={100}
        />
      )}

      <div className="prose">
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
      <p className="posts-date">
        Opublikowano: {new Date(post.publishedAt).toLocaleDateString()}
      </p>
    </div>
  );
}
