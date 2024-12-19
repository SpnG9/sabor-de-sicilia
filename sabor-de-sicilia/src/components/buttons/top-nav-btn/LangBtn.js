import React from "react";
import { useTranslation } from "react-i18next";

// Style
import "./topnavbtn.css";

const LangBtn = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    window.location.reload();
  };

  const languageNames = {
    es: "Español",
    en: "English",
    it: "Italiano",
  };

  return (
    <div role="region" aria-label="Language Selection" className="flex items-center">
      {/* Visually hidden announcement for screen readers */}
      <span className="sr-only" aria-live="polite">
        Current language: {languageNames[currentLang] || currentLang}
      </span>

      <ul className="flex gap-3" role="list">
        {Object.entries(languageNames).map(([langCode, langName]) => (
          <li key={langCode} role="listitem">
            <button
              className="top-nav-btn font-light hover:font-medium focus:font-medium md:text-base text-sm"
              onClick={() => switchLanguage(langCode)}
              aria-label={`Change language to ${langName}`}
              aria-pressed={currentLang === langCode}
              type="button"
            >
              {langCode.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangBtn;
