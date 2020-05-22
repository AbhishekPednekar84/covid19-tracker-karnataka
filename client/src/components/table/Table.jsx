import React, { useEffect, useContext, useState } from "react";
import CovidContext from "../../context/covid/covidContext";
import {
  sortbyConfirmed,
  sortbyActive,
  sortbyDeceased,
  sortbyRecovered,
} from "./helpers/sort";

// Component import
import TableHeader from "./TableHeader";

const Table = () => {
  var newObj = [];

  const [currentSortOrder, setCurrentSortOrder] = useState("default");
  const [btnClicked, setBtnClicked] = useState("");

  const covidContext = useContext(CovidContext);

  const {
    stateData,
    stateDataFetched,
    getZoneData,
    zoneData,
    zoneDataFetched,
    filtered,
    darkMode,
  } = covidContext;

  useEffect(() => {
    getZoneData();
    // eslint-disable-next-line
  }, []);

  // Merge the two arrays to get the counts and zone into one object for each district
  if (zoneDataFetched && stateDataFetched) {
    newObj = stateData
      .filter((f) => {
        return f.district !== "Unknown" && f.district !== "Other State";
      })
      .map((item, index) => Object.assign({}, item, zoneData[index]));
  }

  // Set the sort order to up or down for the button in the table header
  const setSortOrder = () => {
    let nextSortOrder;

    if (currentSortOrder === "down") nextSortOrder = "up";
    else if (currentSortOrder === "up") nextSortOrder = "default";
    else if (currentSortOrder === "default") nextSortOrder = "down";
    return nextSortOrder;
  };

  /* Handle button click separately for all the buttons so that the state 
  can be set individually*/
  const handleConfirmedClick = () => {
    let nextSortOrder = setSortOrder();

    setCurrentSortOrder(nextSortOrder);
    setBtnClicked("confirmed");
  };

  const handleActiveClick = () => {
    let nextSortOrder = setSortOrder();

    setCurrentSortOrder(nextSortOrder);
    setBtnClicked("active");
  };

  const handleRecoveredClick = () => {
    let nextSortOrder = setSortOrder();

    setCurrentSortOrder(nextSortOrder);
    setBtnClicked("recovered");
  };

  const handleDeceasedClick = () => {
    let nextSortOrder = setSortOrder();

    setCurrentSortOrder(nextSortOrder);
    setBtnClicked("deceased");
  };

  return (
    <div>
      <TableHeader />

      <table
        id="districtTable"
        className={
          darkMode
            ? "centered highlight table-container"
            : "highlight centered table-container striped"
        }
      >
        <thead>
          <tr>
            <th>District</th>
            <th>
              <span className="lg-screen">Confirmed</span>
              <span className="md-sm-screen">Cnfrmd</span>
              <button
                className={
                  darkMode
                    ? "sort-button blue-grey-text darken-2"
                    : "sort-button"
                }
                onClick={handleConfirmedClick}
              >
                {"  "}
                <i
                  className={`fas fa-${sortbyConfirmed[currentSortOrder].class}`}
                ></i>
              </button>
            </th>
            <th>
              <span className="lg-screen">Active</span>
              <span className="md-sm-screen">Actv</span>
              <button
                className={
                  darkMode
                    ? "sort-button blue-grey-text darken-2"
                    : "sort-button"
                }
                onClick={handleActiveClick}
              >
                {"  "}
                <i
                  className={`fas fa-${sortbyActive[currentSortOrder].class}`}
                ></i>
              </button>
            </th>
            <th>
              <span className="lg-screen">Recovered</span>
              <span className="md-sm-screen">Rcvrd</span>
              <button
                className={
                  darkMode
                    ? "sort-button blue-grey-text darken-2"
                    : "sort-button"
                }
                onClick={handleRecoveredClick}
              >
                {"  "}
                <i
                  className={`fas fa-${sortbyRecovered[currentSortOrder].class}`}
                ></i>
              </button>
            </th>
            <th>
              <span className="lg-screen">Deceased</span>
              <span className="md-sm-screen">Dscd</span>
              <button
                className={
                  darkMode
                    ? "sort-button blue-grey-text darken-2"
                    : "sort-button"
                }
                onClick={handleDeceasedClick}
              >
                {"  "}
                <i
                  className={`fas fa-${sortbyDeceased[currentSortOrder].class}`}
                ></i>
              </button>
            </th>
          </tr>
        </thead>

        {/* Return the fn from sort.js depending on which button was clicked and the sort
        direction. If there is text to filter with, use the filtered array from the application state. If not, map with the newObj array */}
        <tbody>
          {(filtered !== null
            ? btnClicked === "confirmed"
              ? [...filtered].sort(sortbyConfirmed[currentSortOrder].fn)
              : btnClicked === "active"
              ? [...filtered].sort(sortbyActive[currentSortOrder].fn)
              : btnClicked === "recovered"
              ? [...filtered].sort(sortbyRecovered[currentSortOrder].fn)
              : btnClicked === "deceased"
              ? [...filtered].sort(sortbyDeceased[currentSortOrder].fn)
              : [...filtered]
            : btnClicked === "confirmed"
            ? [...newObj].sort(sortbyConfirmed[currentSortOrder].fn)
            : btnClicked === "active"
            ? [...newObj].sort(sortbyActive[currentSortOrder].fn)
            : btnClicked === "recovered"
            ? [...newObj].sort(sortbyRecovered[currentSortOrder].fn)
            : btnClicked === "deceased"
            ? [...newObj].sort(sortbyDeceased[currentSortOrder].fn)
            : [...newObj]
          ).map((d, index) => {
            return (
              <tr key={index} className={"table-row " + d.zone}>
                <td>{d.district}</td>
                <td>
                  {d.confirmed}{" "}
                  {d.delta.confirmed > 0 && <span>(+{d.delta.confirmed})</span>}
                </td>
                <td>
                  {d.active}{" "}
                  {d.delta.active > 0 && <span>(+{d.delta.active})</span>}
                </td>
                <td>
                  {d.recovered}{" "}
                  {d.delta.recovered > 0 && <span>(+{d.delta.recovered})</span>}
                </td>
                <td>
                  {d.deceased}{" "}
                  {d.delta.deceased > 0 && <span>(+{d.delta.deceased})</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
