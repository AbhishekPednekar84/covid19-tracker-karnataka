import React, { Fragment, useEffect, useContext } from "react";
import CovidContext from "../../context/covid/covidContext";

// Component import
import Preloader from "../layout/Preloader";
import CardItem from "./CardItem";
import CardTestingItem from "./CardTestingItem";

const Cards = () => {
  const covidContext = useContext(CovidContext);
  const { loading, getStateData } = covidContext;

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
          <h3>Current Case Counts</h3>
        </div>
        <div className="card-item-container">
          <CardItem />
        </div>

        <div className="card-testing-heading">
          <h3>Testing Counts</h3>
        </div>
        <div className="card-testing-item-container">
          <CardTestingItem />
        </div>
      </Fragment>
    );
  }
};

export default Cards;
