const Mongoose = require("mongoose");

const TaskSchema = new Mongoose.Schema({
  Expense: String,
  isComplete: Boolean,
});
const Task = Mongoose.model("expenses", TaskSchema);

module.exports = Task;
