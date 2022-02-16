import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import axios from "axios";
// import NewExpenseDB from "./NewExpenseDB";
const NewExpense = (props) => {
  // const [expenseData, setExpenseData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  // let expenseDate2 = {};
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random() };
    props.getSaveExpenseDataHandler(expenseData);
    // console.log(expenseData.title);
    setIsEditing(false);
    //  expenseDataBaseHandler(expenseData);
    if (expenseData === "") {
      return;
    } else {
      axios
        .post("http://localhost:8000/expenses", {
          Expense: expenseData.title,
          Amount: expenseData.amount,
          Date: expenseData.date,
          isComplete: false,
        })
        .then((result) => {
          // props.db = {};
          props.addExpense(result.data);
          // console.log("Data Added to Data Base Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const toggleForm = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };
  // const newData = (result) => {
  //   props.addExpense(result.data);
  // };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={toggleForm}>Add new Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
      {/* <NewExpenseDB db={expenseDate2} addNewData={newData} /> */}
    </div>
  );
};
export default NewExpense;
