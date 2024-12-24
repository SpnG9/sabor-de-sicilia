import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./wip.css";

function Wip() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const redirectTo = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className="wrapper">
        <div className="wrapper text-2xl">
          <span className="letter letter1">W</span>
          <span className="letter letter2">O</span>
          <span className="letter letter3">R</span>
          <span className="letter letter4">K</span>
          <span className="letter letter5"> </span>
          <span className="letter letter6">I</span>
          <span className="letter letter7">N</span>
          <span className="letter letter8"> </span>
          <span className="letter letter9">P</span>
          <span className="letter letter10">R</span>
          <span className="letter letter11">O</span>
          <span className="letter letter12">G</span>
          <span className="letter letter13">R</span>
          <span className="letter letter14">E</span>
          <span className="letter letter15">S</span>
          <span className="letter letter16">S</span>
        </div>
      </div>
      <div className="wip w-[90vw] mx-auto my-10 slideup">
        <p className="md:text-4xl text-2xl font-bold">{t("pages.wip.message")}</p>
      </div>
      <div className="w-[80vw] flex md:justify-end justify-center mx-auto mb-10">
        <button
          onClick={() => redirectTo("/homepage")}
          aria-label={t("main-nav.home")}
          className="text-xl wip-btn p-4 font-semibold slide-in-right"
        >
          <div className="flex items-center justify-between">
            <span className="me-4 arrow">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <span>{t("pages.wip.go-back")}</span>
          </div>
        </button>
      </div>
    </>
  );
}

export default Wip;
