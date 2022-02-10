import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.lists.length === 0) {
    return (
      <p className="expenses-list__fallback">
        There is No expenses found in the year
      </p>
    );
  }

  return (
    <ul className="expenses-list">
      {props.lists.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
