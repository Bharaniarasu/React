import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.lists.length === 0) {
    // console.log("There is No expenses found in the year");
    return (
      <p className="expenses-list__fallback">
        There is No expenses found in the year
      </p>
    );
  }
  // console.log(props.lists);

  return (
    <ul className="expenses-list">
      {props.lists.map((expense) => (
        <ExpenseItem
          key={expense._id}
          title={expense.Expense}
          amount={expense.Amount}
          date={new Date(expense.Date)}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
