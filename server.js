var express = require('express');
var app = express();
app.listen(3000);

const path=require("path");
app.use(express.static(path.join(__dirname, 'dist/metalink')));

app.get("/", function (req,res) {
  res.sendFile(path.join(__dirname,'dist/metalink/index.html'));
});
