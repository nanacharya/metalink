var express = require('express');
var app = express();
const initDb = require("./db").initDb;
const getDb = require("./db").getDb;
const port = 3000;

initDb(function (err) {
  app.listen(port, function (err) {
    if (err) {
      throw err;
    }
    console.log("API Up and running on port " + port);
  });
});


app.get("/test", function (req, res) {
  const db = getDb();
  console.log(db);
  res.send("good to go");
  res.sendFile(path.join(__dirname, 'dist/metalink/index.html'));
});


const path = require("path");
app.use(express.static(path.join(__dirname, 'dist/metalink')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/metalink/index.html'));
});

const userApi = require("./src/backend/user/userApi");
app.use("/api", userApi);
