import { client } from "@/sanity/client";
import MapGirls from "@/app/components/MapGirls";

const PLAYERS_QUERY = `*[
  _type == "players"
  && defined(slug.current)
]|order(publishedAt desc)[0...99]{_id, title, slug, division, gender, name, position, number, image, publishedAt}`;

const options = { next: { revalidate: 30 } };

type Players = {
  _id: string;
  title: string;
  slug: { current: string };
  division: string;
  gender: string;
  name: string;
  position: string;
  number: string;
  // image: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  publishedAt: Date;
};

export const metadata = {
  title: "Druzyna Dziewcząt",
};

async function page() {
  const players = await client.fetch<Players[]>(PLAYERS_QUERY, {}, options);

  return (
    <>
      <MapGirls players={players} />
    </>
  );
}

export default page;
