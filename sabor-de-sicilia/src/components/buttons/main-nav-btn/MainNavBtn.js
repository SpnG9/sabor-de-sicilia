import React from "react";
import { useNavigate } from "react-router-dom";

import "./mainbtn.css";

const MainNavBtn = ({ text, route }) => {
  // Routing
  const navigate = useNavigate();
  const redirectTo = (route) => {
    navigate(route);
  };

  return (
    <button
      className="main-nav-btn text-xl font-bold p-2 md:flex hidden"
      type="button"
      onClick={() => redirectTo(route)}
    >
      {text}
    </button>
  );
};

export default MainNavBtn;
