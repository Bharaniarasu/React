import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
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
