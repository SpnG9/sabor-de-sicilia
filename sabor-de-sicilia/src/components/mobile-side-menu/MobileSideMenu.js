import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useScroll from "../../hooks/useScroll";

import "./menu.css";



// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faChevronDown,
  faPizzaSlice,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";

const MobileSideMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? -1 : index);
  };

  const closeMobileMenu = () => {
    setIsDropdownOpen(false);
    setOpenAccordionIndex(-1);
  };

  const { t } = useTranslation();

  const navigate = useNavigate();
  const redirectTo = (route) => {
    closeMobileMenu();
    navigate(route);
  };

  const isScrolled = useScroll(50);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-label={
          isDropdownOpen
            ? t("aria-labels.mobile-side-menu.opened")
            : t("aria-labels.mobile-side-menu.closed")
        }
        className={`p-2 font-bold mobile-nav-btn ${
          isDropdownOpen ? "btn-opened" : ""
        } ${isScrolled ? "text-xs" : "text-sm"}`}
      >
        <span className="flex items-center">
          Menu
          <div
            className={`transition-all duration-200 ms-2 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </span>
      </button>
      <div
        onClick={closeMobileMenu}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40
          ${isDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      {/* Side Menu */}
      <div
        className={`side-menu-mobile absolute top-10 left-0 w-full bg-white shadow-lg transform transition-all duration-300 z-40 
          origin-top
          ${
            isDropdownOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
      >
        {/* Menu Content */}
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <button
                className="w-full flex justify-start items-center side-menu-btn"
                onClick={() => redirectTo("/contacts")}
              >
                {t("main-nav.contacts")}
              </button>
            </li>
            <li>
              <button
                className="w-full flex justify-start items-center side-menu-btn"
                onClick={() => redirectTo("/location")}
              >
                {t("main-nav.location")}
              </button>
            </li>
            <li>
              <div className="transition-all duration-200">
                <button
                  className="w-full flex justify-start items-center side-menu-btn"
                  onClick={() => toggleAccordion(0)}
                >
                  <span className="flex items-center">
                    {t("main-nav.menu")}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`ms-4 transition-transform duration-200 ${
                      openAccordionIndex === 0 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                    openAccordionIndex === 0 ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  {openAccordionIndex === 0 && (
                    <div>
                      <button
                        className="w-full flex text-sm italic font-light mt-2 mb-1"
                        onClick={() => redirectTo("/menu/food")}
                      >
                        {t("mobile-side-menu.menu-accordion.food")}
                      </button>
                      <button
                        className="w-full flex text-sm italic font-light text-sm"
                        onClick={() => redirectTo("/menu/drinks")}
                      >
                        {t("mobile-side-menu.menu-accordion.drinks")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
            <li>
              <button
                className="w-full flex justify-start items-center side-menu-btn"
                onClick={() => redirectTo("/events")}
              >
                {t("main-nav.events")}
              </button>
            </li>
            <li>
              <div className="transition-all duration-200">
                <button
                  className="w-full flex justify-start items-center side-menu-btn"
                  onClick={() => toggleAccordion(1)}
                >
                  <span className="flex items-center">
                    {t("main-nav.jobs")}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`ms-4 transition-transform duration-200 ${
                      openAccordionIndex === 1 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                    openAccordionIndex === 1 ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  {openAccordionIndex === 1 && (
                    <div>
                      <button
                        className="w-full flex text-sm italic font-light mt-2 mb-1"
                        onClick={() => redirectTo("/jobs/foh")}
                      >
                        {t("mobile-side-menu.jobs-accordion.foh")}
                      </button>
                      <button
                        className="w-full flex text-sm italic font-light text-sm"
                        onClick={() => redirectTo("/jobs/boh")}
                      >
                        {t("mobile-side-menu.jobs-accordion.boh")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileSideMenu;