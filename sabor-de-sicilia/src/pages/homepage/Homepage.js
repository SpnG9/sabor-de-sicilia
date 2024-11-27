import React from "react";
import { useTranslation } from "react-i18next";

import img from "./../../assets/images/homepage/home-img.png"
import "./homepage.css";

// Components
import Newsletter from "../../components/inputs/homepage-input/Newsletter";

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="text-start w-[80vw] mx-auto my-3 p-5 presentation"
      >
        <h1 className=" p-2 mb-3 text-2xl font-bold">
          {t("pages.homepage.welcome-title")}
        </h1>
        <h4 className="p-2 mt-4 text-xl">
          {t("pages.homepage.welcome-content")}
        </h4>
      </div>
      <div id="home-img" className="my-3">
        <img src={img} alt={t("alt.homepage.img")}/>
      </div>
      <div className="presentation text-start w-[80vw] mx-auto my-3 p-5">
      <h1 className=" p-2 mb-3 text-2xl font-bold">
          {t("pages.homepage.journey-title")}
        </h1>
        <h4 className="p-2 mt-4 text-xl">
          {t("pages.homepage.journey-content")}
        </h4>
      </div>
      <div id="prefoot" className="p-5">
        <div className="prefoot-content w-p[90vw] mx-auto flex items-center">
        <div className="subscribe w-[40vw]">
          <h4 className="text-lg font-bold">{t("pages.homepage.prefoot.info")}</h4>
          <h6 className="text-light">{t("pages.homepage.prefoot.subscription")}</h6>
        </div>
        <div className="subscribe w-[40vw]">  
          <Newsletter />
        </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
