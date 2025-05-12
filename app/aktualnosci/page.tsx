import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...99]{_id, title, slug, publishedAt, image}`;

const options = { next: { revalidate: 30 } };

async function page() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  console.log(posts);
  console.log(posts[0].image.asset._ref);

  return (
    <div className="container  min-h-screen posts-box ">
      <h1>Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => {
          const imageUrl = post.image
            ? urlFor(post.image)?.width(550).height(310).url()
            : null;

          return (
            <li className="hover:underline" key={post._id}>
              {imageUrl && (
                <Image
                  src={imageUrl}
                  width={300}
                  height={500}
                  alt="xd"
                  quality={100}
                />
              )}
              <Link href={`/aktualnosci/${post.slug.current}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default page;
