import React, { useReducer } from "react";
import CovidContext from "./covidContext";
import covidReducer from "./covidReducer";
import axios from "axios";
import {
  GET_STATE_DATA,
  GET_LATEST_TIMESTAMP,
  SET_LOADING,
  GET_ZONE_INFO,
  FILTER_DISTRICTS,
  CLEAR_FILTER,
  TIME_SERIES,
  DARK_MODE,
  GET_TESTING_DATA,
} from "../Types";
import { getInitialMode } from "../../components/pages/Home";

const CovidState = (props) => {
  const initialState = {
    stateData: [],
    stateDataFetched: false,
    zoneData: [],
    zoneDataFetched: false,
    testingData: [],
    testingDataFetched: false,
    stateTimeSeries: [],
    timeSeriesLoaded: false,
    timestamp: "",
    filtered: null,

    // Check if user is returning by looking for the dark key in local storage
    darkMode: getInitialMode(),
    loading: false,
  };

  const [state, dispatch] = useReducer(covidReducer, initialState);

  // Get state data
  const getStateData = async () => {
    setLoading();
    const res = await axios.get(
      "https://api.covid19india.org/v2/state_district_wise.json"
    );

    const stateCounts = res.data.filter((f) => {
      return f.state === "Karnataka";
    });
    dispatch({ type: GET_STATE_DATA, payload: stateCounts[0].districtData });
  };

  // Get latest update timestamp
  const getLatestUpdate = async () => {
    setLoading();
    const res = await axios.get("https://api.covid19india.org/data.json");

    // Only dispatch the most recent entry to the reducer
    dispatch({
      type: GET_LATEST_TIMESTAMP,
      payload: res.data.statewise[0].lastupdatedtime,
    });
  };

  // Get zone data
  const getZoneData = async () => {
    setLoading();
    const res = await axios.get("https://api.covid19india.org/zones.json");

    var filteredZone = res.data.zones
      .filter((z) => {
        return z.state === "Karnataka";
      })
      .map((filteredZone) => {
        return {
          district: filteredZone.district,
          zone: filteredZone.zone,
        };
      });

    dispatch({ type: GET_ZONE_INFO, payload: filteredZone });
  };

  // Filter districts in table
  const filterDistricts = (text) => {
    const filteredDistrict = state.stateData
      .filter((f) => {
        return f.district !== "Unknown" && f.district !== "Other State";
      })
      .map((item, index) => Object.assign({}, item, state.zoneData[index]))
      .filter((filteredDistrict) => {
        const regex = new RegExp(text, "gi");
        return filteredDistrict.district.match(regex);
      });

    dispatch({ type: FILTER_DISTRICTS, payload: filteredDistrict });
  };

  // Clearing the filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Generate time series data
  const generateTimeSeriesData = async () => {
    setLoading();
    const res = await axios.get(
      "https://api.covid19india.org/states_daily.json"
    );

    var timeSeries = res.data["states_daily"].slice(-90).map((o) => {
      return { date: o["date"], status: o["status"], count: o["ka"] };
    });

    dispatch({ type: TIME_SERIES, payload: timeSeries });
  };

  // Set dark mode
  const setDarkMode = (mode) => {
    dispatch({ type: DARK_MODE, payload: mode });
  };

  // Get the testing data
  const getTestingData = async () => {
    const res = await axios.get(
      "https://api.covid19india.org/state_test_data.json"
    );
    var karTestData = res.data["states_tested_data"].filter((f) => {
      return f.state === "Karnataka";
    });

    dispatch({ type: GET_TESTING_DATA, payload: karTestData });
  };

  // Set the Preloader component
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <CovidContext.Provider
      value={{
        stateData: state.stateData,
        stateDataFetched: state.stateDataFetched,
        zoneData: state.zoneData,
        zoneDataFetched: state.zoneDataFetched,
        timestamp: state.timestamp,
        stateTimeSeries: state.stateTimeSeries,
        timeSeriesLoaded: state.timeSeriesLoaded,
        loading: state.loading,
        filtered: state.filtered,
        darkMode: state.darkMode,
        testingData: state.testingData,
        testingDataFetched: state.testingDataFetched,
        generateTimeSeriesData,
        getStateData,
        getLatestUpdate,
        getZoneData,
        getTestingData,
        filterDistricts,
        setDarkMode,
        clearFilter,
        setLoading,
      }}
    >
      {props.children}
    </CovidContext.Provider>
  );
};

export default CovidState;
