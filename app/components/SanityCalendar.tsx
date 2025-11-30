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
          alt="Ikona Kalendarza"
          title="Kalendarz"
          className="callendar_icon "
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="calendar-box">
          <div className="calendar-link-box calendar-main-page-link flex justify-between items-center">
            <Link href="/kalendarz">Przejdź do pełnego Kalendarza {"->"}</Link>{" "}
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="cursor-pointer calendar-box-button"
            >
              X
            </button>
          </div>
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
                      <Link
                        href={`/kalendarz/${event.slug.current}`}
                        className="h-full w-full"
                      >
                        <div className="calendar-link-box">
                          <p>
                            {event.title} {"->"}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="calendar-link-box">
                  <p>Brak wydarzeń w tym dniu</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
