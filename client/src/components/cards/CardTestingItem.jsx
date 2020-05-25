import React, { useContext, useEffect } from "react";
import CountUp from "react-countup";
import getMonth from "../layout/constants/getMonth";
import CovidContext from "../../context/covid/covidContext";

const CardTestingItem = () => {
  var totalTests, totalNegativeTests, testingAsOfDate;
  const covidContext = useContext(CovidContext);

  const { getTestingData, testingData, testingDataFetched } = covidContext;

  useEffect(() => {
    getTestingData();
    //eslint-disable-next-line
  }, []);

  if (testingDataFetched) {
    var lastestTest = testingData.slice(-1)[0];
    totalTests = lastestTest.totaltested;
    totalNegativeTests = lastestTest.negative;

    // Since testing data is from a day earlier, displaying the formatted date on the card
    testingAsOfDate = lastestTest.updatedon;
    var formattedDate =
      getMonth(testingAsOfDate.slice(3, 5)) +
      ", " +
      testingAsOfDate.slice(0, 2);
  }

  return (
    <div className="card-testing-grid">
      {/* Total tests */}
      <div id="totalTests" className="stat-card total-tests z-depth-3">
        <h3 className="card-testing-item-heading">Total Tests</h3>

        {totalTests && (
          <p className="generated-counts amber-text darken-4">
            <CountUp start={0} end={parseInt(totalTests)} duration={4} />
          </p>
        )}
        {testingAsOfDate && <p>(as of {formattedDate})</p>}
      </div>

      {/* Total negative tests */}
      <div
        id="totalNegativeTests"
        className="stat-card total-negative-tests z-depth-3"
      >
        <h3 className="card-testing-item-heading">Negative Tests</h3>

        {totalNegativeTests && (
          <p className="generated-counts purple-text accent-2">
            <CountUp
              start={0}
              end={parseInt(totalNegativeTests)}
              duration={4}
            />
          </p>
        )}
        {testingAsOfDate && <p>(as of {formattedDate})</p>}
      </div>
    </div>
  );
};

export default CardTestingItem;
