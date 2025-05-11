// "use client";
import "react-calendar/dist/Calendar.css";
// import { useState } from "react";
import Calendar from "react-calendar";

function ReactCalendar() {
  // const [value, onChange] = useState(new Date());
  return <Calendar value={new Date()} minDate={new Date()} />;
  // return <Calendar onChange={onChange} value={value} minDate={new Date()} />;
}

export default ReactCalendar;
