import React from "react";
import { STATE, STATE_ALT } from "../../config";

const State = () => {
  return (
    <div id="state">
      <h3 className="state-class center-align">
        {STATE} / {STATE_ALT}
      </h3>
    </div>
  );
};

export default State;
