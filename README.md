# [COVID 19 Dashboard for Karnataka](https://kar.corona-tracker.co.in)

[![Build Status](https://travis-ci.org/AbhishekPednekar84/covid19-tracker-karnataka.svg?branch=master)](https://travis-ci.org/AbhishekPednekar84/covid19-tracker-karnataka)

This repository contains the `React.js` code for the **[https://kar.corona-tracker.co.in](https://kar.covid19-info.website)** site.

## Creating a local setup
### Frontend
1. Install `node.js` from [nodejs.org](https://nodejs.org/en/) (if needed). This website uses **v12.13.1**.
2. Clone the current repository using `git clone https://github.com/AbhishekPednekar84/covid19-tracker-karnataka`
3. Install the client dependencies from `package.json` in the `client` directory using the command `npm install`
4. Run the application locally using `npm start`

The website with url **http://localhost:3000** will launch automatically

### Testing a production build locally
1. Create the build by running `npm run build` in the `client` directory
2. Install the `express` package by navigating to the `server` directory and running `npm i express`
2. Run the build from the `server` directory using the command  `node server.js`

The website should be accessible at **http://localhost:3000**.

## Deployment
To deploy the application on a virtual private server and create a CI/CD pipeline with Travis CI, refer to the following articles on [Code Disciples](https://codedisciples.in) -
1. [Deploying a React application on a Linux server](https://codedisciples.in/react-deployment.html)
2. [Continuous Deployment with Travis CI and DigitalOcean](https://codedisciples.in/travis-digitalocean.html)

## Customization
To customize this site for a different Indian state/UT, refer to the [wiki](https://github.com/AbhishekPednekar84/covid19-tracker-karnataka/wiki/State-based-Customization).

---

### Screenshot
<p align="center"><img src="https://github.com/AbhishekPednekar84/covid19-tracker-karnataka/blob/master/client/src/assets/screenshot.jpg" alt="Home"></p>
