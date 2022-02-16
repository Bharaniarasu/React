import { useState } from "react";
import axios from "axios";
// import { set } from "mongoose";

const AddTask = (props) => {
  const [enteredExp, setEnteredExp] = useState([]);
  console.log(enteredExp);

  const AddExp = () => {
    if (enteredExp.trim() === "") {
      return;
    } else {
      axios
        .post("http://localhost:8000/expenses", {
          Expense: enteredExp,
          isComplete: false,
        })
        .then((res) => {
          setEnteredExp("");
          console.log(res.data);

          props.addExp(res.data);
        })
        .catch((err) => console.log("addTask Error : " + err));
    }
    console.log("entered " + enteredExp);
  };
  return (
    <div>
      <h2>welcome you</h2>
      <input
        type="text"
        value={enteredExp}
        placeholder="Add Expense...."
        onChange={(event) => setEnteredExp(event.target.value)}
      ></input>
      <button onClick={AddExp}>Add</button>
    </div>
  );
};
export default AddTask;
