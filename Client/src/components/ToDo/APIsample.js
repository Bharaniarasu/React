import React, { useState } from "react";
// import "./style.css";
import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const APIsample = () => {
  const [data, setData] = useState([]);
  const getMethod = () => {
    console.log("get method");
    axios
      .get("/posts")
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const post = () => {
    axios.post("/posts ", {});
    console.log("Post method");
    axios.post("/posts");
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={getMethod}>GET</button>
      <br />
      <br />
      <br />
      <button onClick={post}>POST</button>
    </div>
  );
};
export default APIsample;
