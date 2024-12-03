import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./mainnav.css";

// Components
import MainNavBtn from "../buttons/main-nav-btn/MainNavBtn";
import MobileSideMenu from "../mobile-side-menu/MobileSideMenu";

const MainNav = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const redirectTo = (route) => {
    navigate(route);
  };

  return (
    <nav id="main-nav" className="p-2 md:p-0">
      <div
        id="main-nav-content"
        className="grid grid-cols-12 items-center md:max-w-80vw mx-auto"
      >
        <div className="col-span-4 hidden md:flex justify-between items-center">
          <MainNavBtn text={t("main-nav.contacts")} route="/contacts" />
          <MainNavBtn text={t("main-nav.location")} route="/location" />
          <MainNavBtn text={t("main-nav.menu")} route="/menu" />
        </div>
        <div className="md:hidden flex justify-start items-center col-span-4">
          <MobileSideMenu/>
        </div>
        <div className="col-span-4 flex items-center justify-center">
          <button id="logo-btn" onClick={() => redirectTo("/homepage")}/>
        </div>
        <div className="col-span-4 flex md:justify-between justify-end items-center">
          <MainNavBtn text={t("main-nav.events")} route="/events" />
          <MainNavBtn text={t("main-nav.jobs")} route="/location" />
          <button
            className="md:text-xl text-sm font-bold p-2"
            id="reservation-btn"
            onClick={() => redirectTo("/reservation")}
          >
            {t("main-nav.reservation")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
