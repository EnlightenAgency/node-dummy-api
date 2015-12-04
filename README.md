#node-dummy-api

The development / dummy API is written in Node and runs on `localhost` on port `1337`.

##Code Dependencies:

- [NodeJS](https://nodejs.org/en/download) JavaScript framework *(instructions below)*
- [Node Package Manager (npm)](https://www.npmjs.com/) JavaScript package manager for Node *(included with Node installation)*

##Requirements and Initial Setup:

 1. Download and install [NodeJS](https://nodejs.org/en/download) on your machine ([npm](https://www.npmjs.com/), aka Node Package Manager, also comes bundled with NodeJS) if you haven't already; Node is also required to build the AngularJS application so you may have already installed it
 2. Run the `npm install` command from the project root directory (the same directory containing this README) to install the Node packages via the `package.json` file (if you get an `EACCESS` error, you will have to run this command with Administrator/root access)
 3. Run `npm install -g nodemon` to install the `nodemon` package globally. This will allow the Node dummy API server to restart itself automatically if changes are made to the `server.js` file

##Root Directory Contents:

 - `/.git` - source control
 - `.gitignore` - list of files/directories to exclude from source control
 - `README.md` - project notes, setup instructions
 - `package.json` - configuration `JSON` file for Node server dependencies
 - `server.js` - Node server code / dummy API

##Files that should be ignored by source control (`.gitignore`):

 - `node_modules` - directory containing Node dependencies and build tools