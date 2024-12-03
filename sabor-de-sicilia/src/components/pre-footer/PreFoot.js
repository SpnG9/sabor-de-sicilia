import React from "react";
import { useTranslation } from "react-i18next";

// Components
import Newsletter from "../inputs/homepage-input/Newsletter";

import "./prefoot.css";

const PreFooter = () => {
  const { t } = useTranslation();

  return (
    <div id="prefoot" className="p-5 md:h-[30vh] flex  items-center">
      <div className="prefoot-content w-[80vw] mx-auto flex md:flex-row flex-col items-center">
        <div className="subscribe md:w-[40vw] w-full">
          <h4 className="md:text-2xl text-xl mb-2 md:m-0 font-bold">
            {t("pages.homepage.prefoot.info")}
          </h4>
          <h6 className="text-light text-lg">
            {t("pages.homepage.prefoot.subscription")}
          </h6>
        </div>
        <div className="subscribe md:w-[40vw] w-full">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
