const Express = require("express");
const Router = Express.Router();
const Task = require("../Models/Model");
Router.get("/", (req, res) => {
  // res.send(req.params.id);
  // res.send("<h1>i am router !" + req.params.id + "</h1>");
  // console.log(req.params.id);
  // const Tasks = new Task({
  //   Expense: req.params.id,
  //   isComplete: false,
  // });
  // console.log(req.params.id);
  // Tasks.save((err, doc) => {
  //   if (err) console.log(err);
  //   // console.log(doc);
  // });

  //display the database in browser

  Task.find((err, doc) => {
    if (err) console.log(err);
    res.json(doc);
    console.log(doc);
  });
});

Router.post("/", (req, res) => {
  const task = new Task(req.body);
  task.save((err, doc) => {
    if (err) console.log(err);
    res.json(doc);
    console.log(doc);
  });
});

Router.put("/:id", (req, res) => {
  Task.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true },
    (err, doc) => {
      if (err) console.log(err);
      res.json(doc);
    }
  );
  // console.log(req.params.id);
});

Router.delete("/:id", (req, res) => {
  Task.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) console.log(err);
    res.json(doc);
  });
});
module.exports = Router;
