import React, { createContext, useState } from "react";

const darkModeContext = createContext();

function darkModeProvider(props) {
  const [darkMode, setDarkmode] = useState(false);
  const toggleDarkMode = () => {
    setDarkmode(!darkMode);
  };
  return (
    <div>
      <darkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </darkModeContext.Provider>
    </div>
  );
}

export { darkModeContext, darkModeProvider };
