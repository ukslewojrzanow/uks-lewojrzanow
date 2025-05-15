"use client";

import IMGCallendar from "@/public/calendaricon.png";
import Image from "next/image";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Link from "next/link";

type Event = {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  location?: string;
  description?: string;
};

type Props = {
  events: Event[];
};

export default function SanityCalendar({ events }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const eventsByDate = events.reduce(
    (acc, event) => {
      const dateKey = new Date(event.date).toDateString();
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(event);
      return acc;
    },
    {} as Record<string, Event[]>
  );

  const tileClassName = ({ date }: { date: Date }) => {
    const dateKey = date.toDateString();
    return eventsByDate[dateKey] ? "react-calendar_event" : "";
  };

  const selectedDateKey = selectedDate?.toDateString();
  const eventsForSelectedDate =
    selectedDateKey && eventsByDate[selectedDateKey]
      ? eventsByDate[selectedDateKey]
      : [];

  const handleDateChange = (
    value: Date | [Date | null, Date | null] | null
  ) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <>
      <div>
        <Image
          src={IMGCallendar}
          alt="Logo"
          className="callendar_icon "
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="calendar-box">
          <Calendar
            locale="pl-PL"
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={tileClassName}
          />

          {selectedDate && (
            <div className="">
              {eventsForSelectedDate.length > 0 ? (
                <ul className="space-y-2">
                  {eventsForSelectedDate.map((event) => (
                    <li key={event._id}>
                      <Link href={`/kalendarz/${event.slug.current}`}>
                        <div className="">{event.title}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Brak wydarzeń w tym dniu</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
