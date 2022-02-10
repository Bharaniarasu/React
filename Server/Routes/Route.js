const Express = require("express");
const Router = Express.Router();
const Task = require("../Models/Model");
Router.get("/", (req, res) => {
  //   res.send(req.params.id);
  // res.send("<h1>i am router !" + req.params.id + "</h1>");
  // console.log(req.params.id);
  const Tasks = new Task({
    Expense: "shopping",
    isComplete: false,
  });
  Tasks.save((err, doc) => {
    if (err) console.log(err);
    console.log(doc);
  });
});
module.exports = Router;
