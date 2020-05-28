import React, { useContext, useEffect } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import CovidContext from "../../context/covid/covidContext";

charts(FusionCharts);

const Piechart = () => {
  const covidContext = useContext(CovidContext);
  const chartColor = ["#3949ab", "#d81b60"];

  const {
    genderData,
    genderDataFetched,
    getGenderData,
    darkMode,
  } = covidContext;

  useEffect(() => {
    getGenderData();
    // eslint-disable-next-line
  }, []);

  if (genderDataFetched) {
    var data = genderData.map((o, i) => {
      return {
        label: o.gender,
        value: o.percentage,
        color: chartColor[i],
      };
    });
  }

  const dataSource = {
    chart: {
      enablesmartlabels: "1",
      showlabels: "1",
      numbersuffix: " %",
      usedataplotcolorforlabels: "1",
      plottooltext: "$label, <b>$value</b>%",
      labelFontSize: "12",
      theme: "fusion",
      bgcolor: darkMode ? "#1a1919" : "#ffffff",
    },
    data: data,
  };

  return (
    <div id="pie-chart">
      <h3 className="pie-header center-align">Cases by Gender</h3>
      <div className="pie-container">
        <ReactFusioncharts
          type="doughnut3d"
          width="600"
          height="300"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </div>
    </div>
  );
};

export default Piechart;
