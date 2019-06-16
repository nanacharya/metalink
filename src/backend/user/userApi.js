const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//var cors = require('cors'),



getDb = require("../../../db").getDb;


router.route("/addUser").post(function (req,res) {

  console.log("the request obj is .................................................***************");
  console.log(req.body);

  const db = getDb();
  let database = db.db('metalink');

  database.collection('users').find().toArray(function (err, result) {
    if (err) throw res.json(err);
    console.log("getting data from users collection ..");
    res.json(result);
  });

});

//
// router.get("/addUser", jsonParser, function (req, res) {
//
//   console.log("the request obj is .................................................***************");
//   console.log(req);
//
//   const db = getDb();
//   let database = db.db('metalink');
//
//   database.collection('users').find().toArray(function (err, result) {
//     if (err) throw res.json(err);
//     console.log("getting data from users collection ..");
//     res.json(result);
//   });
//
// });
//
//
// router.get("/addUser2", function (req, res) {
//
//   console.log("the request obj is .................................................***************");
//   console.log(req);
//
//   const db = getDb();
//   let database = db.db('metalink');
//
//   database.collection('users').find().toArray(function (err, result) {
//     if (err) throw res.json(err);
//     console.log("getting data from users collection ..");
//     res.json(result);
//   });
//
// });

module.exports = router;
