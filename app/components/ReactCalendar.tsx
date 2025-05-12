// "use client";
import "react-calendar/dist/Calendar.css";
// import { useState } from "react";
// import Calendar from "react-calendar";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
function ReactCalendar({ children }: Props) {
  // return <Calendar />;
  return <div>{children}</div>;
}

export default ReactCalendar;
