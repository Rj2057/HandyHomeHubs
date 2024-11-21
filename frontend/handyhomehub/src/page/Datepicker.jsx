import React, { useState } from "react";
import "./Datepicker.css"; // Import the external CSS file
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState("Fri 22");
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();

  const dates = [
    { day: "Fri", date: "22" },
    { day: "Sat", date: "23" },
    { day: "Sun", date: "24" },
    { day: "Mon", date: "25" },
    { day: "Tue", date: "26" },
    { day: "Wed", date: "27" },
  ];

  const timeSlots = [
    "07:00 AM - 12:00 PM",
    "12:00 PM - 04:00 PM",
    "04:00 PM - 06:00 PM",
    "06:00 PM - 08:00 PM",
    

  ];

  const handleProceed = async () => {
    if (selectedDate && selectedTime) {
        const token = localStorage.getItem("auth-token"); // Get the token from local storage

        if (!token) {
            alert("You need to log in first!");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/save_appointment", // Your backend endpoint
                {
                    date: selectedDate,
                    time: selectedTime,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the headers
                    },
                }
            );

            if (response.data.success) {
                alert(`You selected ${selectedDate} at ${selectedTime}`);
                navigate('/adress'); // Redirect to the address page or wherever you want
            } else {
                alert(response.data.errors || "Failed to save appointment.");
            }
        } catch (error) {
            console.error("Error saving appointment:", error);
            alert("An error occurred. Please try again.");
        }
    } else {
        alert("Please select a date and time!");
    }
};

  return (
    <div className="container">
      <h2 className="sub-header">CHOOSE DATE/TIME</h2>

      {/* Date Selector */}
      <div className="date-container">
        {dates.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedDate(`${item.day} ${item.date}`)}
            className={`date-box ${
              selectedDate === `${item.day} ${item.date}` ? "selected" : ""
            }`}
          >
            <span className="date-day">{item.day}</span>
            <span className="date-number">{item.date}</span>
          </div>
        ))}
      </div>

      {/* Time Slot Selector */}
      <div className="time-container">
        {timeSlots.map((time, index) => (
          <div
            key={index}
            onClick={() => setSelectedTime(time)}
            className={`time-slot ${
              selectedTime === time ? "selected" : ""
            }`}
          >
            {time}
          </div>
        ))}
      </div>

      {/* Proceed Button */}
      <button
        className="proceed-button"
        onClick={handleProceed} // Call the handleProceed function
      >
        PROCEED
      </button>
    </div>
  );
};

export default DatePicker;