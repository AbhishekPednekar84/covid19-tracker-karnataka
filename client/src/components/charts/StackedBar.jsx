import React, { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import {
  sortbyConfirmed,
  sortbyActive,
  sortbyRecovered,
  sortbyDeceased,
} from "../table/helpers/sort";

import CovidContext from "../../context/covid/covidContext";

const StackedBar = () => {
  var newChartObj;

  // Variables to hold the top ten districts by categories
  var stackedBarConfirmed,
    stackedBarActive,
    stackedBarRecovered,
    stackedBarDeceased;

  const covidContext = useContext(CovidContext);

  const {
    stateData,
    stateDataFetched,
    zoneData,
    zoneDataFetched,
    darkMode,
  } = covidContext;

  /* Merge the two arrays to get the counts and zone into one object for each district.
     Note that the delta object is removed */
  if (zoneDataFetched && stateDataFetched) {
    newChartObj = stateData
      .filter((f) => {
        return f.district !== "Unknown" && f.district !== "Other State";
      })
      .map((item, index) => Object.assign({}, item, zoneData[index]));

    stackedBarConfirmed = [...newChartObj]
      .sort(sortbyConfirmed["down"].fn)
      .slice(0, 10);

    stackedBarActive = [...newChartObj]
      .sort(sortbyActive["down"].fn)
      .slice(0, 10);

    stackedBarRecovered = [...newChartObj]
      .sort(sortbyRecovered["down"].fn)
      .slice(0, 10);

    stackedBarDeceased = [...newChartObj]
      .sort(sortbyDeceased["down"].fn)
      .slice(0, 10);
  }

  const labelStyle = { fill: "#1a1919", fontWeight: "bold" };

  return (
    <div id="stacked-bar">
      <h3 className="stacked-bar-header center-align">
        Top-ten districts by cases
      </h3>
      <div className="stacked-bar">
        <div
          className={"stacked-bar-container " + (darkMode ? "#999" : "#455a64")}
        >
          <h5 className="center-align">Confirmed cases</h5>
          <BarChart
            layout={"vertical"}
            barGap={3}
            width={350}
            height={350}
            data={stackedBarConfirmed}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis type={"number"} hide />
            <YAxis
              type={"category"}
              width={100}
              padding={{ left: 20 }}
              dataKey="district"
            />
            <Tooltip />
            <Bar
              dataKey="confirmed"
              stackId="a"
              fill="#ff8a80"
              label={labelStyle}
              isAnimationActive={false}
            ></Bar>
          </BarChart>
        </div>

        <div className="stacked-bar-container">
          <h5 className="center-align">Active cases</h5>
          <BarChart
            layout={"vertical"}
            barGap={3}
            width={350}
            height={350}
            data={stackedBarActive}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis type={"number"} hide />
            <YAxis
              type={"category"}
              width={100}
              padding={{ left: 20 }}
              dataKey="district"
            />
            <Tooltip />
            <Bar
              dataKey="active"
              stackId="a"
              fill="#40c4ff"
              label={labelStyle}
              isAnimationActive={false}
            ></Bar>
          </BarChart>
        </div>

        <div className="stacked-bar-container">
          <h5 className="center-align">Recoveries</h5>
          <BarChart
            layout={"vertical"}
            barGap={3}
            width={350}
            height={350}
            data={stackedBarRecovered}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis type={"number"} hide />
            <YAxis
              type={"category"}
              width={100}
              padding={{ left: 20 }}
              dataKey="district"
            />
            <Tooltip />
            <Bar
              dataKey="recovered"
              stackId="a"
              fill="#43a047"
              label={labelStyle}
              isAnimationActive={false}
            ></Bar>
          </BarChart>
        </div>

        <div className="stacked-bar-container">
          <h5 className="center-align">Deaths</h5>
          <BarChart
            layout={"vertical"}
            barGap={3}
            width={350}
            height={350}
            data={stackedBarDeceased}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis type={"number"} hide />
            <YAxis
              type={"category"}
              width={100}
              padding={{ left: 20 }}
              dataKey="district"
            />
            <Tooltip />
            <Bar
              dataKey="deceased"
              stackId="a"
              fill="#b0bec5"
              label={labelStyle}
              isAnimationActive={false}
            ></Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default StackedBar;
