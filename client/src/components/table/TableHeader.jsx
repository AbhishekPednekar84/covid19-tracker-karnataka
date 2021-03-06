import React, { Fragment, useContext, useRef, useEffect } from "react";
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
    var districtName = text.current.value;
    districtName = districtName.replace(
      /[^a-zA-Z]+|[a-zA-Z]+[\\/]+|[^a-zA-Z]+[\\/]+|[\\/]+/g,
      ""
    );

    if (districtName !== "") {
      filterDistricts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <Fragment>
      <div className="table-header">
        <h3 className="center-align table-heading">Counts by district</h3>
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
        <div className="center-align table-legend">
          <span className="Red">More than 15 active cases</span>
          {"  "}
          <span className="separator">⋅</span>
          {"  "}
          <span className="Orange">Between 1 and 15 active cases</span>
          {"  "}
          <span className="separator">⋅</span>
          {"  "}
          <span className="Green">No active cases</span>
        </div>
      </div>
    </Fragment>
  );
};

export default TableHeader;
