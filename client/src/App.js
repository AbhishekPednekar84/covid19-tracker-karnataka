import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CovidState from "./context/covid/CovidState";
import "./App.css";

// Component import
import Home from "./components/pages/Home";

function App() {
  // Initialize Materialize JS
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <CovidState>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </CovidState>
  );
}

export default App;
