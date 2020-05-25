# [COVID 19 Dashboard for Karnataka](https://kar.covid19-info.website)

[![buddy pipeline](https://app.buddy.works/abhiap/covid19-tracker-karnataka/pipelines/pipeline/258489/badge.svg?token=738f35b97ec3ce6a9a115c59e582b088fde6fcee2a92780b69cf9e293e60d114 "buddy pipeline")](https://app.buddy.works/abhiap/covid19-tracker-karnataka/pipelines/pipeline/258489)

This repository contains the `React.js` code for the **[https://kar.covid19-info.website](https://kar.covid19-info.website)** site.

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

### Deployment
To deploy the application on a virtual private server, refer to the [React deployment](https://www.codedisciples.in/react-deployment.html) article on [Code Disciples](https://codedisciples.in).

---

### Screenshot
<p align="center"><img src="https://github.com/AbhishekPednekar84/covid19-tracker-karnataka/blob/master/client/src/assets/screenshot.jpg" alt="Home"></p>
