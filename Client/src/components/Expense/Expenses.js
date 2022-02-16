import { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  // console.log(props.data);
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  // console.log(props.dbExpense[0].Date);
  // const newData = props.dbExpense[0];
  // console.log(newData);
  // console.log(props.data.Date);
  // console.log(props.dbExpense);
  // console.log(props.dbExpense[0].Date);
  // console.log(filteredYear);
  // need more concentration //
  const filteredExpenses = props.dbExpense.filter((expense) => {
    // console.log(expense);

    // console.log("=> " + new Date(expense.Date).getFullYear());

    return new Date(expense.Date).getFullYear().toString() === filteredYear;
  });
  // console.log(filteredExpenses);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onDropdownChange={filterChangeHandler}
      />
      <ExpenseChart onExpenseYear={filteredExpenses} />
      <ExpensesList lists={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
