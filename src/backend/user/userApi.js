const express = require('express');
const router = express.Router();

getDb = require("../../../db").getDb;

router.get("/addUser", function (req, res) {
  const db = getDb();
  let database = db.db('eschool');
  res.send(database.collection("users").find().toArray());

});

module.exports = router;
