import Link from "next/link";

import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const EVENTS_QUERY = `*[
  _type == "event"
  && defined(slug.current)
]|order(date desc)[0...99]{_id, title, slug, date, location, description}`;

const options = { next: { revalidate: 30 } };

async function page() {
  const events = await client.fetch<SanityDocument[]>(
    EVENTS_QUERY,
    {},
    options
  );

  return (
    <div className="container  min-h-screen posts-box ">
      <h1>event</h1>
      <ul className="flex flex-col gap-y-4">
        {events.map((event) => (
          <li className="hover:underline" key={event._id}>
            <Link href={`/kalendarz/${event.slug.current}`}>
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p>{new Date(event.date).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
