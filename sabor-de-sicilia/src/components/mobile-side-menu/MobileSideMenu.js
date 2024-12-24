import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useScroll from "../../hooks/useScroll";

import "./menu.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
        aria-expanded={isDropdownOpen}
        aria-controls="mobile-menu"
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
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </span>
      </button>
      <div
        onClick={closeMobileMenu}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40
          ${isDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-hidden="true"
      />
      {/* Side Menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label={t("aria-labels.mobile-side-menu.navigation")}
        className={`side-menu-mobile absolute top-10 left-0 w-full shadow-lg transform transition-all duration-300 z-40 
          origin-top
          ${
            isDropdownOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
      >
        {/* Menu Content */}
        <nav className="p-4 dropdown-menu">
          <ul className="space-y-4" role="menu">
            <li role="none">
              <button
                role="menuitem"
                className="w-full flex justify-start items-center side-menu-btn"
                onClick={() => redirectTo("/wip")}
              >
                {t("main-nav.contacts")}
              </button>
            </li>
            <li role="none">
              <button
                role="menuitem"
                className="w-full flex justify-start items-center side-menu-btn"
                onClick={() => redirectTo("/wip")}
              >
                {t("main-nav.location")}
              </button>
            </li>
            <li role="none">
              <div className="transition-all duration-200">
                <button
                  role="menuitem"
                  aria-expanded={openAccordionIndex === 0}
                  aria-controls="menu-content"
                  className="w-full flex justify-start items-center side-menu-btn"
                  onClick={() => toggleAccordion(0)}
                >
                  <span className="flex items-center">
                    {t("main-nav.menu")}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ms-4 transition-transform duration-200 ${
                        openAccordionIndex === 0 ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
                <div
                  id="menu-content"
                  className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                    openAccordionIndex === 0 ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  {openAccordionIndex === 0 && (
                    <div
                      role="menu"
                      aria-label={t(
                        "aria-labels.mobile-side-menu.menu-accordion"
                      )}
                    >
                      <button
                        role="menuitem"
                        className="w-full flex text-sm font-light mt-2 mb-1 ms-3 accordion-btn"
                        onClick={() => redirectTo("/wip")}
                      >
                        {t("mobile-side-menu.menu-accordion.food")}
                      </button>
                      <button
                        role="menuitem"
                        className="w-full flex text-sm font-light text-sm ms-3 accordion-btn"
                        onClick={() => redirectTo("/wip")}
                      >
                        {t("mobile-side-menu.menu-accordion.drinks")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
            <li role="none">
              <button
                role="menuitem"
                className="w-full flex justify-start items-center side-menu-btn"
                onClick={() => redirectTo("/wip")}
              >
                {t("main-nav.events")}
              </button>
            </li>
            <li role="none">
              <div className="transition-all duration-200">
                <button
                  role="menuitem"
                  aria-expanded={openAccordionIndex === 1}
                  aria-controls="jobs-content"
                  className="w-full flex justify-start items-center side-menu-btn"
                  onClick={() => toggleAccordion(1)}
                >
                  <span className="flex items-center">
                    {t("main-nav.jobs")}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`ms-4 transition-transform duration-200 ${
                        openAccordionIndex === 1 ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
                <div
                  id="jobs-content"
                  className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                    openAccordionIndex === 1 ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  {openAccordionIndex === 1 && (
                    <div
                      role="menu"
                      aria-label={t("mobile-side-menu.jobs-accordion.label")}
                    >
                      <button
                        role="menuitem"
                        className="w-full flex text-sm font-light mt-2 mb-1 ms-3 accordion-btn"
                        onClick={() => redirectTo("/wip")}
                      >
                        {t("mobile-side-menu.jobs-accordion.foh")}
                      </button>
                      <button
                        role="menuitem"
                        className="w-full flex text-sm font-light text-sm ms-3 accordion-btn"
                        onClick={() => redirectTo("/wip")}
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
