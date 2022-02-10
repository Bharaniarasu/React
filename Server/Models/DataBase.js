const Mongoose = require("mongoose");

module.exports = Mongoose.connect(
  "mongodb://localhost:27017/ExpenseList",
  {
    // useUnifiedTopology: true,
    useNewUrlParser: true,
    //  useFindAndModify: true,
  },
  (err) => {
    if (err) console.log(err);
    console.log("Database connected Successfully");
  }
);
// module.exports = mongoose;
