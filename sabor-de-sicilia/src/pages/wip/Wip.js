import React from "react";
import { useTranslation } from "react-i18next";
import "./wip.css";

function Wip() {
  const { t } = useTranslation();
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
      <h1 className="wip">{t("pages.wip")}</h1>
    </>
  );
}

export default Wip;
