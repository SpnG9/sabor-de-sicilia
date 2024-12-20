import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./homecard.css";

// Hooks
import useScrollAnimations from "../../../hooks/useScrollAnimations";

const HomeCards = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  useScrollAnimations();

  const redirectTo = (route) => {
    navigate(route);
  };

  const cardData = [
    {
      id: "card-food",
      route: "/menu/food",
      label: t("mobile-side-menu.menu-accordion.food"),
      ariaLabel: t("aria-labels.homepage.food-home-card"),
    },
    {
      id: "card-drinks",
      route: "/menu/drinks",
      label: t("mobile-side-menu.menu-accordion.drinks"),
      ariaLabel: t("aria-labels.homepage.drinks-home-card"),
    },
    {
      id: "card-location",
      route: "/location",
      label: t("main-nav.location"),
      ariaLabel: t("aria-labels.homepage.location-home-card"),
    },
  ];

  return (
    <nav
      aria-label="Quick Navigation"
      className="hidden-state from-bottom flex flex-col items-center md:flex-row justify-between w-[70vw] mx-auto"
    >
      {cardData.map((card) => (
        <button
          key={card.id}
          id={card.id}
          className="homepage-card"
          type="button"
          onClick={() => redirectTo(card.route)}
          aria-label={card.ariaLabel}
        >
          <span className="tracking-wide">{card.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default HomeCards;
