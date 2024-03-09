import React from 'react';
import './index.css'; // Import your CSS file for styles

const Notification = () => {
  const message = "The SUJOG site is currently undergoing maintenance and is unavailable between 07 March at 10 PM to 10 March 2024 till 12:PM IST.";

  return (
    <div className="notification-bar">
      <p className="notification-text">{message}</p>
    </div>
  );
};

export default Notification;
