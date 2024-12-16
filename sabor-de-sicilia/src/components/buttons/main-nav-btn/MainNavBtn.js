import React from "react";
import { useNavigate } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";
import "./mainbtn.css";

const MainNavBtn = ({ text, route }) => {
  const navigate = useNavigate();
  const redirectTo = (route) => {
    navigate(route);
  };

  // Use the custom hook
  const isScrolled = useScroll(50);

  return (
    <button
      className={`main-nav-btn text-xl font-bold p-2 md:flex hidden ${
        isScrolled ? "text-base" : ""
      }`}
      type="button"
      onClick={() => redirectTo(route)}
    >
      {text}
    </button>
  );
};

export default MainNavBtn;
