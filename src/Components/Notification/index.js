import React from 'react';
import './index.css'; // Import your CSS file for styles

const Notification = () => {
  const message = "SUJOG Portal is unavailable due to server maintainance.";

  return (
    <div className="notification-bar">
      <p className="notification-text">{message}</p>
    </div>
  );
};

export default Notification;
