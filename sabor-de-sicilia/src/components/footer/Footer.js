import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const redirectTo = (route) => {
    navigate(route);
  };

  return (
    <div id="footer" className="p-3">
      <div
        id="footer-content"
        className="grid grid-cols-12 items-center md:max-w-80vw mx-auto"
      >
        <div className="col-span-4 flex justify-start">
          <ul className="flex flex-col">
            <li>
              <span
                tabIndex={0}
                className="my-1 md:text-lg text-sm  hover:font-bold"
                onClick={redirectTo("/contactos")}
              >
                Tik Tok
              </span>
            </li>
            <li>
              <span
                tabIndex={0}
                className="my-1 md:text-lg text-sm hover:font-bold"
                onClick={redirectTo("/contactos")}
              >
                Facebook
              </span>
            </li>
            <li>
              <span
                tabIndex={0}
                className="my-1 md:text-lg text-sm hover:font-bold"
                onClick={redirectTo("/contactos")}
              >
                Instagram
              </span>
            </li>
            <li>
              <span
                tabIndex={0}
                className="my-1 md:text-lg text-sm hover:font-bold hidden md:flex"
                onClick={redirectTo("/contactos")}
              >
                +34 678 123 456
              </span>
            </li>
            <li>
              <span
                tabIndex={0}
                className="my-1 md:text-lg text-sm hover:font-bold hidden md:flex"
                onClick={redirectTo("/contactos")}
              >
                info@sabordesicilia.es
              </span>
            </li>
            <li>
              <span
                tabIndex={0}
                className="my-1 md:text-lg text-sm hover:font-bold md:hidden flex"
                onClick={redirectTo("/contactos")}
              >
                {t("main-nav.contacts")}
              </span>
            </li>
          </ul>
        </div>
        <div className="col-span-4 flex items-center justify-center">
          <button
            id="footer-logo-btn"
            onClick={() => redirectTo("/homepage")}
          />
        </div>
        <div className="col-span-4 flex justify-end text-right">
          <ul className="flex flex-col">
            <li>
              <span
                tabIndex={0}
                className="my-1 md:text-lg text-sm hover:font-bold"
                onClick={redirectTo("/contactos")}
              >
                {t("main-nav.menu")}
              </span>
            </li>
            <li>
              <span
                tabIndex={0}
                className="my-1 md:text-lg text-sm hover:font-bold"
                onClick={redirectTo("/contactos")}
              >
                {t("main-nav.jobs")}
              </span>
            </li>
            <li>
              <span
                tabIndex={0}
                className="my-1 md:text-lg text-sm hover:font-bold"
                onClick={redirectTo("/contactos")}
              >
                {t("main-nav.location")}
              </span>
            </li>
            <li>
              <span
                tabIndex={0}
                className="my-1 md:text-lg text-sm hover:font-bold"
                onClick={redirectTo("/contactos")}
              >
                {t("main-nav.reservation")}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
