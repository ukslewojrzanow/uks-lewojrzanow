import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Link from "next/link";

const EVENT_QUERY = `*[_type == "event" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const event = await client.fetch<SanityDocument>(
    EVENT_QUERY,
    await params,
    options
  );

  return (
    <div className="container posts-box">
      <Link href="/" className="hover:underline">
        ← Wróć
      </Link>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <h1 className="text-4xl font-bold mb-8">{event.title}</h1>
      <div className="prose">
        <p>{event.description}</p>
        <p>Lokalizacja: {event.location}</p>
      </div>
    </div>
  );
}
