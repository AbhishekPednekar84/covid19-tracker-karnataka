import React, { useContext } from "react";
import CovidContext from "../../context/covid/covidContext";

const Preloader = () => {
  const covidContext = useContext(CovidContext);
  const { darkMode } = covidContext;

  return (
    <div>
      <div className={"progress " + (darkMode ? "dark-mode" : "light-mode")}>
        <div className="indeterminate"></div>
      </div>
    </div>
  );
};

export default Preloader;
