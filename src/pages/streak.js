import React, { useEffect, useState } from "react";
import StreakCalendar from "../components/streakcalender/streakcalender";
import { useAuth } from "../store/auth";  // Assuming this is your custom hook for authentication

const Dashboard = () => {
  const [streakData, setStreakData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // 1-12
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const { user } = useAuth(); // Assuming `user` contains the streak data

  // Use useEffect to fetch and set the streak data
  useEffect(() => {
    if (user && user.streak) {
      setStreakData(user.streak);  // Set the streak data directly
    }
  }, [user]);  // Depend on user to trigger when it's updated

  return (
    <div>
      <h2>Your Streak for {currentMonth}-{currentYear}</h2>
      <StreakCalendar streakData={streakData} year={currentYear} month={currentMonth} />
    </div>
  );
};

export default Dashboard;
