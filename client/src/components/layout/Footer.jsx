import React, { Fragment, useContext } from "react";
import CovidContext from "../../context/covid/covidContext";

const Footer = () => {
  const covidContext = useContext(CovidContext);
  const { darkMode } = covidContext;
  return (
    <Fragment>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="footer-links">
          <a
            href="#credits-modal"
            className={
              darkMode
                ? "btn waves-effect waves-light blue-grey lighten-2 black-text modal-trigger z-depth-1"
                : "btn waves-effect waves-light black modal-trigger z-depth-1"
            }
          >
            <i className="fas fa-thumbs-up"></i> Credits
          </a>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/AbhishekPednekar84/covid19-tracker-karnataka"
            target="blank"
            className={
              darkMode
                ? "btn waves-effect waves-light z-depth-1 blue-grey lighten-2 black-text"
                : "btn waves-effect waves-light z-depth-1 black"
            }
          >
            <i className="fab fa-github"></i> Github
          </a>
        </div>
      </div>
      <footer>
        <div className="blue-grey darken-3">
          <div className="footer-message">
            Made with{" "}
            <span className="red-text">
              <i className="fas fa-heart"></i>
            </span>{" "}
            in Bangalore
          </div>
        </div>
      </footer>

      <div
        id="credits-modal"
        className={"modal " + (darkMode ? "dark-mode" : "light-mode")}
      >
        <div className="modal-content">
          <h6 className="center-align">
            A special thanks to the{" "}
            <a
              href="https://www.covid19india.org/"
              target="blank"
              rel="noopener"
            >
              COVID19INDIA.ORG
            </a>{" "}
            team.
          </h6>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
