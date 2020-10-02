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
  var confirmedSeries,
    recoveredSeries,
    deceasedSeries,
    maxValue,
    maxValueConfirmed,
    maxValueRecovered,
    maxValueDeceased;
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

  console.log(confirmedSeries);

  // Determine the max value for the Y axis
  maxValueConfirmed =
    timeSeriesLoaded &&
    confirmedSeries.map((count) => {
      return parseInt(count.count);
    });
  maxValueConfirmed = timeSeriesLoaded && Math.max(...maxValueConfirmed);

  maxValueRecovered =
    timeSeriesLoaded &&
    recoveredSeries.map((count) => {
      return parseInt(count.count);
    });
  maxValueRecovered = timeSeriesLoaded && Math.max(...maxValueRecovered);

  maxValueDeceased =
    timeSeriesLoaded &&
    deceasedSeries.map((count) => {
      return parseInt(count.count);
    });
  maxValueDeceased = timeSeriesLoaded && Math.max(...maxValueDeceased);

  maxValue = Math.max(maxValueConfirmed, maxValueRecovered, maxValueDeceased);

  return (
    <div id="line-chart">
      <h3 className="line-chart-header center-align">
        Daily Changes (past 30 days)
      </h3>
      <div className="line-chart-container">
        <LineChart
          width={350}
          height={500}
          margin={{ top: 5, right: 40, bottom: 5, left: -10 }}
        >
          <XAxis
            dataKey="date"
            type="category"
            allowDuplicatedCategory={false}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis type="number" domain={[0, maxValue + 100]} />
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
