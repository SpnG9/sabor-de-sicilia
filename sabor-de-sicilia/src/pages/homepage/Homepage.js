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
    <main id="homepage-content">
      {/* Visually hidden page title for screen readers */}
      <h1 className="sr-only">{t("pages.homepage.page-title")}</h1>

      <section 
        className="w-[80vw] mx-auto my-3 p-5 presentation text-wrap" 
        aria-labelledby="welcome-section"
      >
        <h2 
          id="welcome-section" 
          className="hidden-state from-right p-2 text-2xl font-bold"
        >
          {t("pages.homepage.welcome-title")}
        </h2>
        <p 
          className="hidden-state from-left p-2 mt-2 text-xl"
          aria-describedby="welcome-section"
        >
          {t("pages.homepage.welcome-content")}
        </p>
      </section>

      {/* Desktop Image */}
      <div 
        className="hidden-state from-right home-img my-3 hidden md:flex justify-center"
        role="img" 
        aria-label={t("alt.homepage.img")}
      >
        <img 
          src={imgDesktop} 
        />
      </div>

      {/* Mobile Image */}
      <div 
        className="hidden-state from-right home-img my-3 flex md:hidden justify-center"
        role="img" 
        aria-label={t("alt.homepage.img")}
      >
        <img 
          src={imgMobile} 
          className="w-full h-auto object-contain"
        />
      </div>

      <section 
        className="presentation w-[80vw] mx-auto my-3 p-5"
        aria-labelledby="journey-section"
      >
        <h2 
          id="journey-section" 
          className="hidden-state from-left p-2 text-2xl font-bold"
        >
          {t("pages.homepage.journey-title")}
        </h2>
        <p 
          className="hidden-state from-left p-2 mt-2 text-xl"
          aria-describedby="journey-section"
        >
          {t("pages.homepage.journey-content")}
        </p>
      </section>
      <section aria-labelledby="journey-section" className="my-5">
        <HomepageCard/>
      </section>
    </main>
  );
};

export default Homepage;