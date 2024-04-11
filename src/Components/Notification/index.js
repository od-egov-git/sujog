import React from 'react';
import './index.css'; // Import your CSS file for styles

const Notification = () => {
  const message = "SUJOG portal and mPos will remain down from 9:00 PM 10th April to 11:59 PM 11th April 2024 due to maintainance work.";

  return (
    <div className="notification-bar">
      <p className="notification-text">{message}</p>
    </div>
  );
};

export default Notification;
