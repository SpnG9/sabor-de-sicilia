import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

// Components
import Newsletter from "../inputs/homepage-input/Newsletter";

import "./prefoot.css";
import useScrollAnimations from "../../hooks/useScrollAnimations";

const PreFooter = () => {
  const { t } = useTranslation();
  useScrollAnimations();
  const location = useLocation();
  const isWipRoute = location.pathname === "/wip"

  return (
    <div id="prefoot" className={`flex items-center ${isWipRoute ? "hidden" : ""}`}>
      <div className="prefoot-content w-[80vw] mx-auto flex md:flex-row flex-col items-center">
        <div className="hidden-state from-left subscribe md:w-[40vw] w-full">
          <h4 className="md:text-2xl text-xl mb-2 md:m-0 font-bold">
            {t("pages.homepage.prefoot.info")}
          </h4>
          <h6 className="text-light text-lg">
            {t("pages.homepage.prefoot.subscription")}
          </h6>
        </div>
        <div className="hidden-state from-right subscribe md:w-[40vw] w-full">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
