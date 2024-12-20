import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const redirectTo = (route) => {
    navigate(route);
  };

  const location = useLocation();
  const isWipRoute = location.pathname === "/wip";

  return (
    <footer
      id="footer"
      className={`p-3 ${isWipRoute ? "hidden" : ""}`}
      role="contentinfo"
    >
      <div
        id="footer-content"
        className="grid grid-cols-12 items-center md:max-w-80vw mx-auto"
      >
        {/* Social Media Links */}
        <div className="col-span-4 flex justify-start">
          <ul className="flex flex-col">
            {["Tik Tok", "Facebook", "Instagram"].map((platform, index) => (
              <li key={index}>
                <button
                  className="footer-btn my-1 md:text-xl text-sm font-semibold hover:font-extrabold"
                  onClick={() => redirectTo("/wip")}
                  aria-label={`${platform} link`}
                >
                  {platform}
                </button>
              </li>
            ))}
            <li>
              <button
                className="footer-btn my-1 md:text-xl text-sm font-semibold hover:font-extrabold"
                onClick={() => redirectTo("/wip")}
                aria-label={t("main-nav.contacts")}
              >
                {t("main-nav.contacts")}
              </button>
            </li>
          </ul>
        </div>

        {/* Logo Button */}
        <div className="col-span-4 flex items-center justify-center">
          <button
            id="footer-logo-btn"
            type="button"
            aria-label={t("footer.homepage")}
            onClick={() => redirectTo("/homepage")}
          />
        </div>

        {/* Navigation Links */}
        <div className="col-span-4 flex justify-end text-right">
          <ul className="flex flex-col">
            {["menu", "jobs", "location", "reservation"].map((key, index) => (
              <li key={index}>
                <button
                  className="footer-btn my-1 md:text-xl text-sm font-semibold hover:font-extrabold"
                  onClick={() => redirectTo("/wip")}
                  aria-label={t(`main-nav.${key}`)}
                >
                  {t(`main-nav.${key}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
