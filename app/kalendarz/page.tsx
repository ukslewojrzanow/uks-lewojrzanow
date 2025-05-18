import Link from "next/link";

import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import FadeIn from "../UI/FadeIn";

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
    <section className="min-h-[95vh]">
      <div className="container calendar-page">
        <h1 className="section_h2">Kalendarz UKS Rusiec</h1>
        <ul className="calendar-page-list">
          {events.map((event) => (
            <FadeIn key={event._id}>
              <li className="hover:underline" key={event._id}>
                <Link href={`/kalendarz/${event.slug.current}`}>
                  <p>*{event.title}</p>
                  <p>{new Date(event.date).toLocaleDateString()}</p>
                </Link>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default page;
