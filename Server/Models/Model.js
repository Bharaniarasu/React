const Mongoose = require("mongoose");

const TaskSchema = new Mongoose.Schema({
  Expense: String,
  Amount: String,
  Date: Object,
  isComplete: Boolean,
});
const Task = Mongoose.model("expenses", TaskSchema);

module.exports = Task;
