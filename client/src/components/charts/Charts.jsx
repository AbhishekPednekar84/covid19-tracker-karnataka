import React, { Fragment, useEffect, useContext } from "react";
import CovidContext from "../../context/covid/covidContext";

// Component imports
import StackedBar from "./StackedBar";
import Linechart from "./Linechart";
import Piechart from "./Piechart";

const Charts = () => {
  const covidContext = useContext(CovidContext);

  const { generateTimeSeriesData } = covidContext;

  useEffect(() => {
    generateTimeSeriesData();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <StackedBar />
      <Linechart />
      <Piechart />
    </Fragment>
  );
};

export default Charts;
