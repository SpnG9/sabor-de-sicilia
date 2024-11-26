import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./menu.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MobileSideMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen)
  };
  
  const { t } = useTranslation();

  const navigate = useNavigate();
  const redirectTo = (route) => {
    navigate(route);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-label={
          isDropdownOpen
            ? t("aria-labels.mobile-side-menu.opened")
            : t("aria-labels.mobile-side-menu.closed")
        }
        className={`text-sm p-2 font-bold mobile-nav-btn ${
          isDropdownOpen ? "btn-opened" : ""
        }`}
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
        onClick={() => setIsDropdownOpen(false)}
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
                onClick={() => redirectTo("/reservation")}
              >
                Reservación
              </button>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-100 rounded-lg">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-100 rounded-lg">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-100 rounded-lg">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileSideMenu;
