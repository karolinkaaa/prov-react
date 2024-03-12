import React, { useContext } from "react";
import { darkModeContext } from "./context/darkModeContext.jsx";

function Lightswitch() {
  const { darkMode, toggleDarkMode } = useContext(darkModeContext);
  const handleClick = () => {
    toggleDarkMode;
  };
  return (
    <div className="Lightswitch">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800"
        onClick={handleClick}
      >
        Darkmode
      </button>
    </div>
  );
}

export default Lightswitch;
