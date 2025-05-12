"use client";
import IMGCallendar from "@/public/calendaricon.png";
import Image from "next/image";
import { useState } from "react";
import ReactCalendar from "./ReactCalendar";
import Calendar from "./Calendar";

function Callendar() {
  const [isOpen, setIsOpen] = useState(false);
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
        <div
          className="calendar-box
        "
        >
          <ReactCalendar>
            <Calendar />
          </ReactCalendar>
        </div>
      )}
    </>
  );
}

export default Callendar;
