// React
import React from "react";
import { useTranslation } from "react-i18next";

// Style
import "./topnav.css";

// Components
import IcoBtn from "../buttons/top-nav-btn/IcoBtn";
import LangBtn from "../buttons/top-nav-btn/LangBtn";

// Font Awesome
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function TopNav() {
  const { t } = useTranslation();

  return (
    <nav id="top-nav">
      <div
        id="top-nav-content"
        className="grid grid-cols-12 items-center w-100 md:max-w-90vw mx-auto p-2 md:p-1"
      >
        {/* Left */}
        <div className="col-span-9 md:col-span-5 flex items-center justify-startm md:text-base text-sm">
          <p className="font-light">{t("top-nav.reservation")}</p>
          <a
            href="tel:+34678123456"
            className="ml-2 font-light hover:font-medium"
          >
            +34 678 123 456
          </a>
        </div>
        {/* Right */}
        <div className="col-span-3 md:col-span-7 flex items-center justify-end">
          <a
            href="mailto:info@sabordesicilia.es"
            className="font-light hover:font-medium hidden md:flex"
          >
            info@sabordesicilia.es
          </a>
          <div className="mx-5 flex gap-3 hidden md:flex">
            <IcoBtn icon={faFacebookF} />
            <IcoBtn icon={faInstagram} />
            <IcoBtn icon={faTiktok} />
          </div>
          <LangBtn />
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
