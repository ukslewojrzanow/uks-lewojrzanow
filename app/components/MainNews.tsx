import Link from "next/link";
import ScrollUp from "../UI/ScrollUp";
import IMGnews from "@/public/homenews.jpg";
import IMGicon from "@/public/handballmanblack.png";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...99]{_id, title, slug, publishedAt, image}`;

const options = { next: { revalidate: 30 } };

async function MainNews() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  const imageUrl =
    posts && posts[0].image
      ? urlFor(posts[0].image)?.width(600).height(400).url()
      : null;

  const post = posts && posts[0];

  return (
    <section className="section_div" id="aktualnosci">
      <ScrollUp>
        <div className="container relative">
          <h2 className="section_h2">Aktualności</h2>
          <div className="home_news-boxes">
            <div className="home_news-textbox">
              <h3 className="section_h3">Najnowsze z boiska!</h3>
              <p>
                Nie przegap tego, co dzieje się w UKS Rusiec - mecze, wyniki,
                wydarzenia i kulisy klubu! Sprawdź najnowsze aktualności i bądź
                na bieżąco z naszymi sukcesami.
              </p>
              <Link href="/aktualnosci" className="home_news-btn uppercase">
                Wszystkie aktualności
              </Link>
            </div>
            <div className="home_news-imgbox">
              {imageUrl ? (
                <Link
                  href={`/aktualnosci/${post.slug.current}`}
                  className="grid"
                >
                  <Image
                    src={imageUrl}
                    width={600}
                    height={400}
                    alt="aktualnosci"
                    className="relative"
                  />

                  <span className="absolute text-xl latest-news">
                    Sprawdź {`->`}
                  </span>
                </Link>
              ) : (
                <Image src={IMGnews} alt="aktualnosci" />
              )}
            </div>
          </div>

          <Image src={IMGicon} alt="piłka" className="section_bg-icon" />
        </div>
      </ScrollUp>
    </section>
  );
}

export default MainNews;
