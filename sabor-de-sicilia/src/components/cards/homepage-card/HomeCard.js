import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./homecard.css";

const HomeCards = () => {
  const navigate = useNavigate();
  const redirectTo = (route) => {
    navigate(route);
  };

  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center md:flex-row justify-between w-[70vw] mt-4 mx-auto">
      <button
        id="card-food"
        className="homepage-card"
        type="button"
        onClick={() => redirectTo("/menu/food")}
      >
        <span>
          {t("mobile-side-menu.menu-accordion.food")}
        </span>
      </button>
      <button
        id="card-drinks"
        className="homepage-card my-5"
        type="button"
        onClick={() => redirectTo("/menu/drinks")}
      >
        <span>
          {t("mobile-side-menu.menu-accordion.drinks")}
        </span>
      </button>
      <button
        id="card-location"
        className="homepage-card"
        type="button"
        onClick={() => redirectTo("/location")}
      >
        <span>{t("main-nav.location")}</span>
      </button>
    </div>
  );
};

export default HomeCards;
