const Express = require("express");
const App = Express();
var cors = require("cors");

App.use(cors());
// App.use((req, res, next) => {
//   // Website you wish to allow to connect
//   res.header("Access-Control-Allow-Origin", "*");

//   // Request methods you wish to allow
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   // Request headers you wish to allow
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,Accept,Authorization,X-Requested-With,content-type"
//   );

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   // res.setHeader("Access-Control-Allow-Credentials", true);

//   // Pass to next layer of middleware
//   console.log("CORS executed......");
//   next();
// });
const Router = require("./Routes/Route");
const Mongoose = require("./Models/DataBase");
const { application } = require("express");

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

App.use(Express.json());
App.use("/expenses", Router);
App.listen("8000", (err) => {
  if (err) console.log(err);
  console.log("server started successfully on Port : 8000");
});
// App.use(cors());
