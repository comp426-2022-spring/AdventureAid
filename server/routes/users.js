const express = require("express");
const User = require('../schemas/user-schema'); 

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /users.
const usersRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");
const { db } = require("../schemas/user-schema");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the users.
usersRoutes.route("/app/users").get(function (req, res) {
  let db_connect = dbo.getDb("AdventureAid");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single user by id
usersRoutes.route("/app/users/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: req.params.id};
  db_connect
      .collection("users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new user.
usersRoutes.route("/app/users/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  //creates a newUser document using the User model
  let newUser = new User({
      _id: req.body.username,
      name: req.body.name,
      vaccinations: { 
      malaria: req.body.malaria,
      hepatitisA: req.body.hepatitisA,
      hepatitisB: req.body.hepatitisB,
      yellowFever: req.body.yellowFever,
      tyfoid: req.body.tyfoid,
      dtp: req.body.dtp,
      cholera: req.body.cholera
    },
    languages: req.body.languages
  });
  db_connect.collection("users").insertOne(newUser, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a user by id.
usersRoutes.route("/app/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();  
  let myquery = { _id: req.params.id};  
  let newUser = new User({
    _id: req.body.username,
    name: req.body.name,
    vaccinations: { 
    malaria: req.body.malaria,
    hepatitisA: req.body.hepatitisA,
    hepatitisB: req.body.hepatitisB,
    yellowFever: req.body.yellowFever,
    tyfoid: req.body.tyfoid,
    dtp: req.body.dtp,
    cholera: req.body.cholera
    },
  languages: req.body.languages
  });
  db_connect.collection("users").updateOne(myquery, newUser, function ( err, obj) {
    if (err) throw err;
    console.log("1 document updated");
    response.json(obj);
  })
});

// This section will help you delete a user
usersRoutes.route("/app/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: req.params.id};
  db_connect.collection("users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = usersRoutes;