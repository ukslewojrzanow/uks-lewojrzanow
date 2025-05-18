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
    <section className="min-h-[95vh]">
      <div className="container calendar-event-page">
        <div className="comeback">
          <Link href="/kalendarz" className="hover:underline">
            ← Pełen kalendarz
          </Link>
        </div>
        <div className="text-box">
          <h2 className="section_h2">{event.title}</h2>
          <div className="prose">
            <h3 className="section_h4">
              {new Date(event.date).toLocaleDateString()}
            </h3>
            <p>{event.description}</p>
            <h4 className="section_h3">Lokalizacja: {event.location}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
