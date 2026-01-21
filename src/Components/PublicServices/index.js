import React from "react";
import { useDispatch, useSelector } from "react-redux";

function PublicServices() {
  const dispatch = useDispatch();
  const handlePdfs = (e) => {
    const value = e.target.value;

    if (!value) return;

    if (value === "sitemap") {
      window.open("/assets/img/map-2.jpg", "_blank");
    }

    if (value === "holiday") {
      window.open("/path/to/holiday-list.pdf", "_blank");
    }

    // Reset the dropdown back to placeholder
    e.target.value = "";
  };

  return (
    <select onChange={handlePdfs} defaultValue="" className="language-switcher-dropdown" style={{ borderRadius: "20px" }}>
      <option value="" disabled hidden>
        Public Services
      </option>
      <option value="sitemap">Site Map</option>
      <option value="holiday">Holiday List</option>
    </select>
  );
}

export default PublicServices;

