import SanityCalendar from "./SanityCalendar";

// import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const EVENTS_QUERY = `*[
  _type == "event"
  && defined(slug.current)
]|order(date desc)[0...99]{_id, title, slug, date, location, description}`;

const options = { next: { revalidate: 30 } };

type Event = {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  location?: string;
  description?: string;
};

export default async function Calendar() {
  const events = await client.fetch<Event[]>(EVENTS_QUERY, {}, options);

  return <SanityCalendar events={events} />;
}
