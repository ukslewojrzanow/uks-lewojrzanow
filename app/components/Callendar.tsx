"use client";
import IMGCallendar from "@/public/calendaricon.png";
import Image from "next/image";
import { useState } from "react";
import ReactCalendar from "./ReactCalendar";
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
          <ReactCalendar />
        </div>
      )}
    </>
  );
}

export default Callendar;
