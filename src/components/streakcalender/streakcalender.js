import React, { useState, useEffect } from "react";
import "./streak.css"

const StreakCalendar = ({ streakData, year, month }) => {
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    // Generate the calendar grid
    const daysInMonth = new Date(year, month, 0).getDate(); // Get the number of days in the month
    const startDay = new Date(year, month - 1, 1).getDay(); // Get the first day of the month
    const calendar = [];

    // Add empty boxes for previous month's overflow (if any)
    for (let i = 0; i < startDay; i++) {
      calendar.push(null);
    }

    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${year}-${month}-${i < 10 ? "0" + i : i}`; // Format date
      calendar.push({ day: i, date });
    }

    setCalendarDays(calendar);
  }, [year, month]);

  return (
    <div className="calendar">
      {calendarDays.map((item, index) => (
        <div
          key={index}
          className={`day-box ${streakData.includes(item?.date) ? "streak-day" : ""}`}
        >
          {item ? item.day : ""}
        </div>
      ))}
    </div>
  );
};

export default StreakCalendar;
