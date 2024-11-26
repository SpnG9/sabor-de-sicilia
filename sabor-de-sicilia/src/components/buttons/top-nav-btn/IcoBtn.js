import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Style
import "./topnavbtn.css"

function IcoBtn({ icon }) {
  return (
    <button type="button" className="top-nav-btn">
      <FontAwesomeIcon icon={icon}/>
    </button>
  )
}

export default IcoBtn;