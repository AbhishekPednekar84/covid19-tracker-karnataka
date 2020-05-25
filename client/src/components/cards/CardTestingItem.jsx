import React, { useContext, useEffect } from "react";
import CountUp from "react-countup";
import CovidContext from "../../context/covid/covidContext";

const CardTestingItem = () => {
  var totalTests, totalNegativeTests;
  const covidContext = useContext(CovidContext);

  const { getTestingData, testingData, testingDataFetched } = covidContext;

  useEffect(() => {
    getTestingData();
    //eslint-disable-next-line
  }, []);

  if (testingDataFetched) {
    totalTests = testingData.slice(-1)[0].totaltested;
    totalNegativeTests = testingData.slice(-1)[0].negative;
  }

  return (
    <div className="card-testing-grid">
      {/* Total tests */}
      <div id="totalTests" className="stat-card total-tests z-depth-3">
        <h3 className="card-item-heading">Total Tests</h3>

        {totalTests && (
          <p className="generated-counts amber-text darken-4">
            <CountUp start={0} end={totalTests} duration={4} />
          </p>
        )}
      </div>

      {/* Total negative tests */}
      <div
        id="totalNegativeTests"
        className="stat-card total-negative-tests z-depth-3"
      >
        <h3 className="card-item-heading">Total Negative Tests</h3>

        {totalNegativeTests && (
          <p className="generated-counts purple-text accent-2">
            <CountUp start={0} end={totalNegativeTests} duration={4} />
          </p>
        )}
      </div>
    </div>
  );
};

export default CardTestingItem;
