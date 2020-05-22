import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import CovidContext from "../../context/covid/covidContext";

const Navbar = () => {
  const covidContext = useContext(CovidContext);

  const { darkMode, setDarkMode } = covidContext;

  return (
    <Fragment>
      <nav className="nav-extended blue-grey darken-3">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left-align">
            COVID 19 Tracker - Karnataka{" "}
          </Link>
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* Mode toggle */}
            <li>
              <button
                className="btn-mode-toggle"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <span className="yellow-text">
                    <i className="fas fa-sun"></i>
                  </span>
                ) : (
                  <span className="white-text">
                    <i className="fas fa-moon"></i>
                  </span>
                )}
              </button>
            </li>
            {/* About */}
            <li>
              <a
                className="nav-button waves-effect waves-light modal-trigger"
                href="#aboutModal"
              >
                <span>
                  <i className="far fa-question-circle"></i>
                </span>{" "}
                About
              </a>
            </li>
            {/* Myth Busters */}
            <li>
              <a
                className="nav-button waves-effect waves-light"
                target="blank"
                href="https://coronamythbusters.com"
              >
                <span>
                  <i className="fas fa-viruses"></i>
                </span>{" "}
                Myth Busters
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidenav */}
      <ul
        className={"sidenav " + (darkMode ? "dark-mode" : "light-mode")}
        id="mobile-demo"
      >
        <li>
          <a
            className="waves-effect waves-light modal-trigger"
            href="#aboutModal"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="waves-effect waves-light"
            target="blank"
            href="https://coronamythbusters.com"
          >
            Myth Busters
          </a>
        </li>
        <li>
          <button
            className="btn-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <span className="yellow-text">
                <i className="fas fa-3x fa-sun center-align"></i>
              </span>
            ) : (
              <span className="blue-grey-text">
                <i className="fas fa-3x fa-moon"></i>
              </span>
            )}
          </button>
        </li>
      </ul>

      {/* About modal */}
      <div
        id="aboutModal"
        className={"modal " + (darkMode ? "dark-mode" : "light-mode")}
      >
        <div className="modal-content">
          <h4>About this site</h4>
          <div className="qna">
            <p className="about-question">
              <i className="fas fa-question-circle orange-text"></i> Why did we
              build this site?
            </p>
            <p className="about-answer">
              <i className="fas fa-pen green-text"></i> This is an unofficial
              site created in public interest to track the COVID 19 cases across
              the state of Karnataka.
            </p>
          </div>

          <div className="qna">
            <p className="about-question">
              <i className="fas fa-question-circle orange-text"></i> From where
              do we get all the information?
            </p>
            <p className="about-answer">
              <i className="fas fa-pen green-text"></i> All the data is sourced
              from the API open sourced by the{" "}
              <a href="covid19india.org" target="blank">
                COVID19INDIA.ORG
              </a>{" "}
              team.
            </p>
          </div>

          <div className="qna">
            <p className="about-question">
              <i className="fas fa-question-circle orange-text"></i> Is this it?
            </p>
            <p className="about-answer">
              <i className="fas fa-pen green-text"></i> We certainly hope not
              🙂! We plan to continue adding more content to the site as
              additional data from various sources becomes available.
            </p>
          </div>
        </div>
        <div
          className={"right-align " + (darkMode ? "dark-mode" : "light-mode")}
        >
          <a
            href="!#"
            className="modal-close waves-effect waves-blue btn-flat center-align"
          >
            CLOSE
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
