import React, { useContext, useEffect } from "react";
import lastUpdate from "./helpers/lastUpdate";
import CovidContext from "../../context/covid/covidContext";

const Update = () => {
  const covidContext = useContext(CovidContext);
  const { timestamp, getLatestUpdate } = covidContext;

  useEffect(() => {
    getLatestUpdate();
    // eslint-disable-next-line
  }, []);

  var formattedTime = lastUpdate(timestamp);
  return (
    <div className="update-container">
      <p className="update-para blue-grey-text lighten-4">
        Last updated {formattedTime} IST
      </p>{" "}
      <a href="/">
        <i class="refresh fas fa-2x fa-sync-alt blue-grey-text"></i>
      </a>
    </div>
  );
};

export default Update;
