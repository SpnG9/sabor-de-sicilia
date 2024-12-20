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
      <div class="wrapper">
        <div class="wrapper">
          <span class="letter letter1">W</span>
          <span class="letter letter2">O</span>
          <span class="letter letter3">R</span>
          <span class="letter letter4">K</span>
          <span class="letter letter5"> </span>
          <span class="letter letter6">I</span>
          <span class="letter letter7">N</span>
          <span class="letter letter8"> </span>
          <span class="letter letter9">P</span>
          <span class="letter letter10">R</span>
          <span class="letter letter11">O</span>
          <span class="letter letter12">G</span>
          <span class="letter letter13">R</span>
          <span class="letter letter14">E</span>
          <span class="letter letter15">S</span>
          <span class="letter letter16">S</span>
        </div>
      </div>
      <div className="wip w-[90vw] mx-auto my-10 slideup">
        <p className="text-4xl font-bold">{t("pages.wip.message")}</p>
      </div>
      <div className="w-[80vw] flex flex-row-reverse mx-auto">
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
