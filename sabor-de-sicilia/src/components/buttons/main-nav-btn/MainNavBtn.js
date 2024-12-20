import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";
import "./mainbtn.css";

const MainNavBtn = ({ text, route }) => {
  const navigate = useNavigate();

  // Use the custom hook
  const isScrolled = useScroll(50);
  const location = useLocation();
  const isWipRoute = location.pathname === "/wip";

  return (
    <button
      className={`main-nav-btn font-bold p-2 md:flex hidden justify-center ${
        (isScrolled || isWipRoute) ? "text-lg" : "text-xl"
      }`}
      type="button"       
      onClick={() => navigate(route)}
    >
      {text}
    </button>
  );
};

export default MainNavBtn;
