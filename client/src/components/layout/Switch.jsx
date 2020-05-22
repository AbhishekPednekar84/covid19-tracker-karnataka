import React from "react";
import Slider from "react-slick";

// Component import
import Table from "../table/Table";
import Charts from "../charts/Charts";

const Switch = () => {
  return (
    <div style={{ width: "100%" }}>
      <Slider speed={500} slidesToShow={1} slidesToScroll={1} infinite={true}>
        <div style={{ width: "100%" }}>
          <Table />
        </div>
        <div style={{ width: "100%" }}>
          <Charts />
        </div>
      </Slider>
    </div>
  );
};

export default Switch;
