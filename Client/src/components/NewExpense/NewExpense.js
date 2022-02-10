import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random() };
    props.getSaveExpenseDataHandler(expenseData);
    // console.log(expenseData);
    setIsEditing(false);
  };

  const toggleForm = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={toggleForm}>Add new Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
