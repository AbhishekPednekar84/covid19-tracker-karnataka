import React, { Fragment, useContext, useEffect } from "react";
import CovidContext from "../../context/covid/covidContext";

// Component import
import Navbar from "../layout/Navbar";
import State from "../layout/State";
import Update from "../layout/Update";
import Cards from "../cards/Cards";
import Table from "../table/Table";
import Footer from "../layout/Footer";
import Charts from "../charts/Charts";

// Get initial mode - dark / light
const getInitialMode = () => {
  const isReturningUser = "dark" in localStorage;
  const savedMode = JSON.parse(localStorage.getItem("dark")) || false;
  const userPrefersDark = getPreferredColorScheme();

  if (isReturningUser) {
    return savedMode;
  }
  if (userPrefersDark) {
    return true;
  } else {
    return false;
  }
};

// Check if user has a preferred color scheme setting for the browser
const getPreferredColorScheme = () => {
  if (!window.matchMedia) return;

  // returns true if user has dark mode preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const Home = () => {
  const covidContext = useContext(CovidContext);

  const { darkMode } = covidContext;

  // Store the dark mode value in the browser's local storage
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Fragment>
      <Navbar />
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <State />
        <Update />
        <Cards />
        <Table />
        <Charts />
      </div>

      <Footer />
    </Fragment>
  );
};

export default Home;
export { getInitialMode };
