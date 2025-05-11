"use client";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const { default: Calendar } = require("react-calendar");

function ReactCalendar() {
  const [value, onChange] = useState(new Date());
  return <Calendar onChange={onChange} value={value} minDate={new Date()} />;
}

export default ReactCalendar;
