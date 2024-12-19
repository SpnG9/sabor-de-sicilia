import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./mainnav.css";
import MainNavBtn from "../buttons/main-nav-btn/MainNavBtn";
import MobileSideMenu from "../mobile-side-menu/MobileSideMenu";
import useScroll from "../../hooks/useScroll";

const MainNav = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isScrolled = useScroll(50);

  const redirectTo = (route) => {
    navigate(route);
  };

  return (
    <nav
      id="main-nav"
      className={`p-2 md:p-0 ${isScrolled ? "scrolled" : ""}`}
      aria-label="Main Navigation"
    >
      <div
        id="main-nav-content"
        className="grid grid-cols-12 items-center md:max-w-80vw mx-auto"
      >
        {/* Desktop Navigation */}
        <div
          className="col-span-4 hidden md:flex justify-between items-center"
          role="menu"
        >
          <MainNavBtn
            text={t("main-nav.contacts")}
            route="/wip"
            role="menuitem"
          />
          <MainNavBtn
            text={t("main-nav.location")}
            route="/wip"
            role="menuitem"
          />
          <MainNavBtn text={t("main-nav.menu")} route="/wip" role="menuitem" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-start items-center col-span-4">
          <MobileSideMenu />
        </div>

        {/* Logo */}
        <div className="col-span-4 flex items-center justify-center">
          <button
            id="logo-btn"
            onClick={() => redirectTo("/homepage")}
            className={`logo-btn ${isScrolled ? "logo-shrink" : ""}`}
            aria-label={t("main-nav.home")}
          />
        </div>

        {/* Right Side Navigation */}
        <div
          className="col-span-4 flex md:justify-between justify-end items-center"
          role="menu"
        >
          <MainNavBtn
            text={t("main-nav.events")}
            route="/wip"
            role="menuitem"
          />
          <MainNavBtn text={t("main-nav.jobs")} route="/wip" role="menuitem" />
          <button
            className={`font-bold p-2 ${
              isScrolled ? "md:text-lg text-xs" : "md:text-xl text-sm"
            }`}
            id="reservation-btn"
            onClick={() => redirectTo("/wip")}
            aria-label={t("main-nav.reservation")}
          >
            {t("main-nav.reservation")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
