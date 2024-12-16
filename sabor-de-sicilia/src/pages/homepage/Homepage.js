import React from "react";
import { useTranslation } from "react-i18next";

import imgDesktop from "./../../assets/images/homepage/home-img.png";
import imgMobile from "./../../assets/images/homepage/home-img-mobile.jpg";
import "./homepage.css";

// Components
import HomepageCard from "../../components/cards/homepage-card/HomeCard";

// Hooks
import useScrollAnimations from "../../hooks/useScrollAnimations";

const Homepage = () => {
  const { t } = useTranslation();
  useScrollAnimations();

  return (
    <>
      <div className="w-[80vw] mx-auto my-3 p-5 presentation text-wrap">
        <h1 className="hidden-state from-right p-2 text-2xl font-bold">
          {t("pages.homepage.welcome-title")}
        </h1>
        <h4 className="hidden-state from-left p-2 mt-2 text-xl
        ">
          {t("pages.homepage.welcome-content")}
        </h4>
      </div>
      <div className="hidden-state from-right home-img my-3 hidden md:flex">
        <img src={imgDesktop} alt={t("alt.homepage.img")} />
      </div>
      <div className="hidden-state from-right home-img my-3 flex md:hidden">
        <img src={imgMobile} alt={t("alt.homepage.img")} />
      </div>
      <div className="presentation w-[80vw] mx-auto my-3 p-5">
        <h1 className="hidden-state from-left p-2 text-2xl font-bold">
          {t("pages.homepage.journey-title")}
        </h1>
        <h4 className="hidden-state from-left p-2 mt-2 text-xl">
          {t("pages.homepage.journey-content")}
        </h4>
        <HomepageCard />
      </div>
    </>
  );
};

export default Homepage;
