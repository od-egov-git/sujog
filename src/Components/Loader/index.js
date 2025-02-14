import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const isLoading = useSelector((state) => state.localization.isLoading);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="loader"></div>
      </div>
    );
  }

  return null; // No loader when not loading
};

export default Loader;
