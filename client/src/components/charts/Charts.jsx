import React, { Fragment, useEffect, useContext } from "react";
import CovidContext from "../../context/covid/covidContext";

// Component imports
import StackedBar from "./StackedBar";
import Linechart from "./Linechart";

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
    </Fragment>
  );
};

export default Charts;
