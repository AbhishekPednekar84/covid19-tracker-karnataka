import React, { Fragment, useEffect, useContext } from "react";
import CovidContext from "../../context/covid/covidContext";


// Component import
import Preloader from "../layout/Preloader";
import CardItem from "./CardItem";

const Cards = () => {
  const covidContext = useContext(CovidContext);
  const { getLatestUpdate, timestamp, loading, getStateData } = covidContext;

  useEffect(() => {
    getStateData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader />;
  } else {
    return (
      <Fragment>
        <div className="card-heading">
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
