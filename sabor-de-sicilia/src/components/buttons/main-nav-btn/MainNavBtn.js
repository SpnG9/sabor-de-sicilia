import React from "react";
import { useNavigate } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";
import "./mainbtn.css";

const MainNavBtn = ({ text, route }) => {
  const navigate = useNavigate();

  // Use the custom hook
  const isScrolled = useScroll(50);

  return (
    <button
      className={`main-nav-btn font-bold p-2 md:flex hidden justify-center ${
        isScrolled ? "text-lg" : "text-xl"
      }`}
      type="button"       
      onClick={() => navigate(route)}
    >
      {text}
    </button>
  );
};

export default MainNavBtn;
