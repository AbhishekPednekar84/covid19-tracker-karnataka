import React, { Fragment, useEffect, useContext } from "react";
import CovidContext from "../../context/covid/covidContext";
import lastUpdate from "./helpers/lastUpdate";

// Component import
import Preloader from "../layout/Preloader";
import CardItem from "./CardItem";

const Cards = () => {
  const covidContext = useContext(CovidContext);
  const { getLatestUpdate, timestamp, loading, getStateData } = covidContext;

  useEffect(() => {
    getLatestUpdate();
    getStateData();
    // eslint-disable-next-line
  }, []);

  var formattedTime = lastUpdate(timestamp);

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <Fragment>
        <div className="card-heading">
          <p className="blue-grey-text lighten-4">
            Last updated {formattedTime} IST
          </p>
          <h3>Current Counts</h3>
        </div>
        <div className="card-item-container">
          <CardItem />
        </div>
      </Fragment>
    );
  }
};

export default Cards;
