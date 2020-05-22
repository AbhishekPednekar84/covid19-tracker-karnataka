import React, { useContext, memo } from "react";
import CovidContext from "../../context/covid/covidContext";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#ff7043", "#43a047", "#b71c1c"];

const Piechart = () => {
  var data;

  const covidContext = useContext(CovidContext);
  const { zoneData } = covidContext;

  data = zoneData.reduce((color, i) => {
    color[i.zone] = (color[i.zone] || 0) + 1;
    return color;
  }, {});

  var zoneCounts = [
    {
      color: "orange",
      value: data["Orange"],
    },
    {
      color: "green",
      value: data["Green"],
    },
    {
      color: "red",
      value: data["Red"],
    },
  ];

  return (
    <div id="pie-chart">
      <h3 className="pie-header center-align">District counts by zones</h3>
      <div className="pie-container enter-align">
        <PieChart width={300} height={200}>
          <Pie
            data={zoneCounts}
            cx={150}
            cy={150}
            startAngle={180}
            endAngle={0}
            isAnimationActive={false}
            innerRadius={80}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={6}
            dataKey="value"
            label
          >
            {zoneCounts.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default memo(Piechart);
