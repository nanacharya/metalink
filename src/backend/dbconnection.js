const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;

// let db;
//
// const connection = (res) => {
//
//   //    'mongodb+srv://eschool:eschool@cluster0-mee3i.mongodb.net/test?retryWrites=true&w=majority'
//
//   return mongoClient.connect(
//     'mongodb://localhost:27017/'
//     , {
//       useNewUrlParser: true
//     },
//
//     (err, mongodb) => {
//       var db = mongodb.db('user');
//       if (err) {
//         return console.log(err);
//       }
//       res(db);
//     }
//   )
// };
//
//
// let response = {
//   status: 0,
//   data: [],
//   message: null
// };
//
// let sendError = (err, res) => {
//   response.status = 501;
//   response.message = 'error occurred due to ' + err.message;
//   response.data = [];
//   res.status(501).json(response);
// };
//
// router.get("/db", (req, res) => {
//   console.log("calling /db");
//   connection((db) => {
//     db.collection("users").find().toArray().then((records) => {
//         response.data = records;
//         response.status = 200;
//         response.message = 'we got what we wanted';
//         console.log("success...");
//         console.log(records);
//
//         response = records;
//         res.json(response);
//       },
//       (err) => {
//         console.log("error...");
//         console.log(err);
//         sendError(err, res);
//       })
//
//   });
//
// });

const assert = require("assert");
const client = require("mongodb").MongoClient;
//const config = require("../config");
let _db;

module.exports = {
 // getDb,
  initDb
};


function initDb(callback) {
  if (_db) {
    console.warn("Trying to init DB again!");
    return callback(null, _db);
  }
  console.log("connecting db..........");
  client.connect('mongodb://localhost:27017/users', {useNewUrlParser: true}, connected);

  function connected(err, db) {
    if (err) {
      return callback(err);
    }
    console.log("DB initialized - connected to: " + config.db.connectionString.split("@")[1]);
    _db = db;
    return callback(null, _db);
  }


  function getDb() {
    console.log("getting db........");
    assert.ok(_db, "Db has not been initialized. Please called init first.");
    return _db;
  }


}


module.exports = router;
