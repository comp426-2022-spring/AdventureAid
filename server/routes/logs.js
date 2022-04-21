const express = require("express");
const Log = require('../schemas/log-schema'); 

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /logs.
const logsRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the logs.
logsRoutes.route("/app/logs/").get(function (req, res) {
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
logsRoutes.route("/app/logs/:id/").get(function (req, res) {
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
logsRoutes.all('/app/*', function (req, res, next) {
  //   console.log({  
  //   remote_addr: req.ip,
  //   remote_user: req.hostname,
  //   date: new Date(Date.now()),
  //   method: req.method,
  //   url: req.url,
  //   protocol: req.protocol,
  //   http_version: req.httpVersion,
  //   status: res.statusCode,
  //   content_length: res.headers,
  //   referrer_url: req.referrer,
  //   user_agent: req.get('user-agent')
  // })
  let db_connect = dbo.getDb();
  //creates a newUser document using the Log model
  let newLog = new Log({  
    remote_addr: req.ip,
    remote_user: req.user,
    date: new Date(Date.now()),
    method: req.method,
    url: req.url,
    protocol: req.protocol,
    http_version: req.httpVersion,
    status: res.statusCode,
    content_length: res.getHeader('content-length'),
    referrer_url: req.get('Referrer'),
    user_agent: req.get('user-agent')
  });
  db_connect.collection("logs").insertOne(newLog, function (err, res) {
    if (err) throw err;
  });
  next()
});


module.exports = logsRoutes;