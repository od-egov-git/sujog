import React from "react";
import { useDispatch, useSelector } from "react-redux";
import usePageLocalization from "../../utils/usePageLocalization";

function PublicServices() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.localization.language);
  const t = usePageLocalization(language, "menuBar");
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
        {t.navigationPublicServices}
      </option>
      <option value="sitemap">{t.navigationSiteMap}</option>
      <option value="holiday">{t.navigationHolidayList}</option>
    </select>
  );
}

export default PublicServices;

