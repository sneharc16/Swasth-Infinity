import React, { useEffect, useState } from "react";
import StreakCalendar from "../components/streakcalender/streakcalender";
import { useAuth } from "../store/auth"; // Assuming this is your custom hook for authentication

const Dashboard = () => {
  const [streakData, setStreakData] = useState([]); // Stores the user's login streak dates
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Current month (1-12)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Current year

  const { user } = useAuth(); // Fetch user data from the auth context or store

  // Update streak data when the user data changes
  useEffect(() => {
    if (user && user.lastLoginDates) {
      const formattedDates = user.lastLoginDates.map(date =>
        new Date(date).toISOString().split("T")[0] // Convert to YYYY-MM-DD
      );
      setStreakData(formattedDates); // Assuming `lastLoginDates` is an array of streak dates in `YYYY-MM-DD` format
    }
  }, [user]);

  const handleMonthChange = (direction) => {
    if (direction === "prev") {
      // Navigate to the previous month
      if (currentMonth === 1) {
        setCurrentMonth(12);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else if (direction === "next") {
      // Navigate to the next month
      if (currentMonth === 12) {
        setCurrentMonth(1);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>
        Your Streak for {currentMonth < 10 ? `0${currentMonth}` : currentMonth}-{currentYear}
      </h2>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => handleMonthChange("prev")}>Previous Month</button>
        <button onClick={() => handleMonthChange("next")} style={{ marginLeft: "10px" }}>
          Next Month
        </button>
      </div>
      <StreakCalendar streakData={streakData} year={currentYear} month={currentMonth} />
    </div>
  );
};

export default Dashboard;
