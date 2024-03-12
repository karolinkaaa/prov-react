import React, { useContext } from "react";
import Lightswitch from "./lightswitch.js";
import { darkModeContext } from "./context/darkModeContext.jsx";

function Container() {
  const { darkMode } = useContext(darkModeContext);
  return (
    <div
      className={
        darkMode ? `Container Containter-dark` : `Container Container-light`
      }
    >
      <Lightswitch />
    </div>
  );
}

export default Container;
