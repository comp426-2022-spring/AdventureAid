const express = require("express");
const Log = require('../schemas/log-schema'); 

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /logs.
const logsRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");
const { db } = require("../schemas/log-schema");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the logs.
logsRoutes.route("/logs").get(function (req, res) {
  let db_connect = dbo.getDb("AdventureAid");
  db_connect
    .collection("logs")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single log by id
logsRoutes.route("/logs/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id)};
  db_connect
      .collection("logs")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new log.
logsRoutes.route("/logs/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  //creates a newUser document using the Log model
  let newLog = new Log({  
    remote_addr: req.body.remote_addr, 
    remote_user: req.body.remote_user, 
    date: req.body.date,
    method: req.body.method, 
    url: req.body.url, 
    http_version: req.body.http_version, 
    status: req.body.status, 
    content_length: req.body.content_length,
    referrer_url: req.body.referrer_url,            
    user_agent: req.body.user_agent
  });
  db_connect.collection("logs").insertOne(newLog, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});


module.exports = logsRoutes;