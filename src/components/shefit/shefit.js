import React, { useState, useEffect } from "react";
import one from "../../assets/one.jpg"
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
import four from "../../assets/four.jpg";
import five from "../../assets/five.jpg";
import Navbar from "../Navbar/navbar";
import "./shefit.css";

const MenstrualCycleTracker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [lastPeriodDate, setLastPeriodDate] = useState(null);
  const [calendarDays, setCalendarDays] = useState([]);

  const generateCalendar = (date, lastPeriod) => {
    const days = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    const prevMonthLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    for (let i = firstDayOfWeek; i > 0; i--) {
      days.push({
        day: prevMonthLastDay - i + 1,
        otherMonth: true,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDay = new Date(date.getFullYear(), date.getMonth(), i);
      let isPeriod = false;

      if (lastPeriod) {
        const nextPeriodDate = new Date(lastPeriod);
        nextPeriodDate.setDate(nextPeriodDate.getDate() + 28);
        if (currentDay.toDateString() === nextPeriodDate.toDateString()) {
          isPeriod = true;
        }
      }

      days.push({
        day: i,
        today: currentDay.toDateString() === new Date().toDateString(),
        period: isPeriod,
      });
    }

    const remainingDays = (7 - (days.length % 7)) % 7;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        otherMonth: true,
      });
    }

    setCalendarDays(days);
  };

  useEffect(() => {
    generateCalendar(currentDate, lastPeriodDate);
  }, [currentDate, lastPeriodDate]);

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleLastPeriodChange = (event) => {
    setLastPeriodDate(new Date(event.target.value));
  };

  return (
    <div style={{display:"flex"}}>
    <Navbar/>
      {/* Menstrual Cycle Tracker Section */}
      <div className="tracker-section">
        <div className="tracker-container">
          <h1>Menstrual Cycle Tracker</h1>
          <div className="input-section">
            <label htmlFor="lastPeriod">Last Menstrual Cycle Date:</label>
            <input
              type="date"
              id="lastPeriod"
              onChange={handleLastPeriodChange}
            />
          </div>
          <div className="calendar-header">
            <button onClick={handlePrevMonth}>&#8592;</button>
            <h2>
              {currentDate.toLocaleString("default", { month: "long" })}{" "}
              {currentDate.getFullYear()}
            </h2>
            <button onClick={handleNextMonth}>&#8594;</button>
          </div>
          <div className="calendarshe">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="day-header">
                {day}
              </div>
            ))}
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`day ${day.otherMonth ? "other-month" : ""} ${
                  day.today ? "today" : ""
                } ${day.period ? "period" : ""}`}
              >
                {day.day}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Myth vs Fact Cards Section */}
      <div className="myth-fact-section">
        <div className="myth-fact-container">
          <h2 className="section-title">Myth vs Fact</h2>
          <div className="myth-fact-grid">
            <div className="card">
              <img src={one} alt="Myth 1" />
            </div>
            <div className="card">
              <img src={two} alt="Myth 1" />
            </div>
            <div className="card">
              <img src={three} alt="Myth 1" />
            </div>
            <div className="card">
              <img src={four} alt="Myth 1" />
            </div>
            <div className="card">
              <img src={five} alt="Myth 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenstrualCycleTracker;