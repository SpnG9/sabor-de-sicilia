import React from "react";
import { useTranslation } from "react-i18next";

// Style
import "./topnavbtn.css";

const LangBtn = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-3">
      <button
        className="top-nav-btn font-light hover:font-medium focus:font-medium md:text-base text-sm"
        onClick={() => switchLanguage("es")}
      >
        ES
      </button>
      <button
        className="top-nav-btn font-light hover:font-medium focus:font-medium md:text-base text-sm"
        onClick={() => switchLanguage("en")}
      >
        EN
      </button>
      <button
        className="top-nav-btn font-light hover:font-medium focus:font-medium md:text-base text-sm"
        onClick={() => switchLanguage("it")}
      >
        IT
      </button>
    </div>
  );
};

export default LangBtn;
