const Express = require("express");
const Router = require("./Routes/Route");
const Mongoose = require("./Models/DataBase");
const App = Express();

App.use("/", Router);
App.listen("8000", (err) => {
  if (err) console.log(err);
  console.log("server started successfully on Port : 8000");
});
