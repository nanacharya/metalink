var express = require('express');
var app = express();
const path = require("path");

const bodyParse = require('body-parser');
const cors = require('cors');
const initDb = require("./db").initDb;
const getDb = require("./db").getDb;
const port = 3000;

app.use(bodyParse.json());
app.use(cors);

let bussinessRoute = express.Router();

//database initilization
initDb(function (err) {
  app.listen(port, function (err) {
    if (err) {
      throw err;
    }
    console.log("API Up and running on port " + port);
  });
});

//configuration of path
app.use(express.static(path.join(__dirname, 'dist/metalink')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/metalink/index.html'));
});


bussinessRoute.route("/add").post(function (req, res) {
  console.log("request body is .............///////////////////////");
 // console.log((req.body));
});



app.get("/test", function (req, res) {

  console.log("texxxxxxxxxx");
  console.log(req.body);
  res.send("is this success.....");
});


//using server api's
const userApi = require("./src/backend/user/userApi");
app.use("/api", userApi);



