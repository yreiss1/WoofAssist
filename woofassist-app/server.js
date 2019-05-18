/* 

    Copyright 2019 - University of Maryland

    Authors: 
        [1] Yuval Reiss
        [2] Michael Reininger

    Description: This file contains the routes for endpoints that the WoofAssist collar hits in order to
    send the data. This file also contains the code which allows us to read and write data into the database.

    Sources:
        [1] Express
        [2] BodyParser 
        [3] Firebase 
        [4] Node.js

*/

const express = require("express");
const bodyParser = require("body-parser");
var firebase = require("firebase/app");
require("firebase/database");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var firebaseConfig = {
  /* INSERT FIREBASE CREDENTIALS HERE */
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

app.get("/", (req, res) => {
  var commandList = [];

  database
    .ref("commands/")
    .once("value", snapshot => {
      snapshot.forEach(command => {
        console.log("This is the command: " + command.val().command);

        commandList.push(command.val());
      });
      return commandList;
    })
    .then(list => {
      console.log("This is the commandList: " + JSON.stringify(list));
      res.send(list);
    });
});

//Endpoint for server data
app.post("/server", (req, res) => {
  console.log(req.body);
  database.ref("sensor/").set({});
});

//Endpoint for command data
app.post("/command", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body}`
  );

  database
    .ref("commands/")
    .push()
    .set({
      command: req.body.command,
      timestamp: req.body.timestamp,
      didReact: req.body.didReact,
      coords: { lat: req.body.coords.lat, lon: req.body.coords.lon }
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
