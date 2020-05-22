import React, { useContext, useRef, useEffect } from "react";
import CovidContext from "../../context/covid/covidContext";

const TableHeader = () => {
  const covidContext = useContext(CovidContext);
  const text = useRef("");

  const { filterDistricts, clearFilter, filtered, darkMode } = covidContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    if (text.current.value !== "") {
      filterDistricts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div className="table-header">
      <h3 className="center-align table-heading">Counts by district</h3>
      <p className="center-align">
        Each district is color-coded depending on whether it currently lies in
        the <span className="Red">red</span>,{" "}
        <span className="Orange">orange</span> or{" "}
        <span className="Green">green</span> zone.
      </p>
      <form className="col s12 search-form">
        <div className="input-field col s6">
          <i className="fas fa-search"></i>
          <input
            type="text"
            ref={text}
            className={darkMode ? "validate dark-mode" : "validate"}
            onChange={handleChange}
            placeholder="Search by district..."
          />
        </div>
      </form>
    </div>
  );
};

export default TableHeader;
