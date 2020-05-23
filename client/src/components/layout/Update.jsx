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
      <p className="blue-grey-text lighten-4">
        Last updated {formattedTime} IST
      </p>
    </div>
  );
};

export default Update;
