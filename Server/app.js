var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var urlencodedpaarcer = bodyparser.urlencoded({ extended: false });
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
});

app.post("/home", urlencodedpaarcer, (req, res) => {
  res.send(
    "<h1>welcome you " +
      req.body.username +
      "</h1> <h1>Mail ID " +
      req.body.email +
      "</h1>"
  );
  console.log(req.query["username"]);
});
app.listen(1000);
