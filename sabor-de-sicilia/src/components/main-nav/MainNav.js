import React from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./mainnav.css";
import logo from "./../../assets/images/logo/default.png";

// Components
import MainNavBtn from "../buttons/main-nav-btn/MainNavBtn";

const MainNav = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const redirectTo = (route) => {
    navigate(route);
  };

  return (
    <nav id="main-nav">
      <div
        id="main-nav-content"
        className="grid grid-cols-12 items-center md:max-w-80vw mx-auto p-2"
      >
        {/* Desktop navigation */}
        <div className="col-span-5 flex justify-between items-center">
          <MainNavBtn text={t("main-nav.contacts")} route="/contacts" />
          <MainNavBtn text={t("main-nav.location")} route="/location" />
          <MainNavBtn text={t("main-nav.menu")} route="/menu" />
        </div>
        <div className="col-span-2 flex items-center justify-center mx-3">
          <button role="button" route="/">
            <img id="logo-btn" src={logo} />
          </button>
        </div>
        <div className="col-span-5 flex justify-between items-center">
          <MainNavBtn text={t("main-nav.history")} route="/contacts" />
          <MainNavBtn text={t("main-nav.jobs")} route="/location" />
          <button
            className="text-xl font-bold p-2"
            id="reservation-btn"
            onClick={() => redirectTo("/reservation")}
          >
            {t("main-nav.resevation")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
