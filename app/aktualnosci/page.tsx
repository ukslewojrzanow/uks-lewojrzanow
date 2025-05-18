import KVdruzyny from "@/public/bg-teams.jpg";

import MainPartners from "../components/MainPartners";

import FadeIn from "../UI/FadeIn";

import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import Image from "next/image";

import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import MainSocial from "../components/MainSocial";

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

  return (
    <>
      <FadeIn>
        <section className="grid justify-center gap-8 items-center page_teams overflow-hidden relative">
          <h1 className="text-center hero_h1-long">Aktualności</h1>
          <Image
            src={KVdruzyny}
            alt="Drużyny zespołu UKS Rusiec"
            fill
            className="object-cover object-top -z-10 "
          />
        </section>
      </FadeIn>
      <MainPartners />
      <section className="section_div">
        <div className="container">
          <h2 className="section_h2">Bądź na bieżąco</h2>
          <ul className="posts-grid">
            {posts.map((post) => {
              const imageUrl = post.image
                ? urlFor(post.image)?.width(550).height(310).url()
                : null;

              return (
                <FadeIn key={post._id}>
                  <li className="hover:underline" key={post._id}>
                    <Link href={`/aktualnosci/${post.slug.current}`}>
                      <div className="relative w-full h-[300px] max-sm:max-h-[200px]">
                        {imageUrl && (
                          <Image
                            src={imageUrl}
                            // width={400}
                            // height={500}
                            fill
                            className="object-cover object-center"
                            alt={post.title}
                            quality={100}
                          />
                        )}
                      </div>
                      <div className="posts-textbox">
                        <h3 className="section_h3">{post.title}</h3>
                        <p className="posts-date">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  </li>
                </FadeIn>
              );
            })}
          </ul>
        </div>
      </section>
      <MainSocial />
    </>
  );
}

export default page;
