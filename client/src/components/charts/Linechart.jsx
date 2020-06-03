import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import CovidContext from "../../context/covid/covidContext";

const Linechart = () => {
  var confirmedSeries, recoveredSeries, deceasedSeries, maxValue;
  const covidContext = useContext(CovidContext);

  const { stateTimeSeries, timeSeriesLoaded } = covidContext;

  if (timeSeriesLoaded) {
    confirmedSeries = stateTimeSeries.filter((f) => {
      return f.status === "Confirmed";
    });

    recoveredSeries = stateTimeSeries.filter((f) => {
      return f.status === "Recovered";
    });

    deceasedSeries = stateTimeSeries.filter((f) => {
      return f.status === "Deceased";
    });
  }

  const series = [
    {
      name: "Confirmed",
      data: timeSeriesLoaded && confirmedSeries,
      stroke: "#b71c1c",
    },
    {
      name: "Recovered",
      data: timeSeriesLoaded && recoveredSeries,
      stroke: "#43a047",
    },
    {
      name: "Deceased",
      data: timeSeriesLoaded && deceasedSeries,
      stroke: "#607d8b",
    },
  ];

  // Determine the max value for the Y axis
  maxValue =
    timeSeriesLoaded &&
    confirmedSeries.map((count) => {
      return parseInt(count.count);
    });
  maxValue = timeSeriesLoaded && Math.max(...maxValue);

  return (
    <div id="line-chart">
      <h3 className="line-chart-header center-align">
        Daily Changes (past 30 days)
      </h3>
      <div className="line-chart-container">
        <LineChart
          width={400}
          height={500}
          margin={{ top: 5, right: 40, bottom: 5, left: -10 }}
        >
          <XAxis
            dataKey="date"
            type="category"
            allowDuplicatedCategory={false}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis type="number" domain={["auto", maxValue + 10]} />
          <Tooltip />
          <Legend />
          {series.map((s) => (
            <Line
              dataKey="count"
              data={s.data}
              name={s.name}
              key={s.name}
              stroke={s.stroke}
              strokeWidth={2}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </div>
    </div>
  );
};

export default Linechart;
