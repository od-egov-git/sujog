// src/components/LanguageSwitcher.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/actions/localizationActions";

// function LanguageSwitcher() {
//   const dispatch = useDispatch();
//   const { language } = useSelector((state) => state.localization);

//   const handleLanguageChange = (lang) => {
//     dispatch(setLanguage(lang));
//   };

//   return (
//     <div>
//       <button onClick={() => handleLanguageChange("en")}>English</button>
//       <button onClick={() => handleLanguageChange("or")}>ଓଡ଼ିଆ</button>
//     </div>
//   );
// }

// export default LanguageSwitcher;
// src/Components/LanguageSwitcher.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { setLanguage } from '../../store/localizationSlice';

function LanguageSwitcher() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.localization);
  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <select onChange={handleLanguageChange} defaultValue="en" className="language-switcher-dropdown"   style={{borderRadius: "20px"}}>
      <option value="en">English</option>
      <option value="or">ଓଡିଆ</option>
    </select>
  );
}

export default LanguageSwitcher;

