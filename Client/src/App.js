import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// const date = new Date(2021, 3, 14);
const dummyData = [
  { id: "a1", date: new Date(2021, 3, 14), title: "Food", amount: 5400 },
  { id: "a2", date: new Date(2021, 8, 10), title: "Grocerries", amount: 1250 },
  { id: "a3", date: new Date(2019, 5, 11), title: "Vegetables", amount: 1250 },
  { id: "a4", date: new Date(2022, 6, 9), title: "Fruits", amount: 700 },
  { id: "a5", date: new Date(2020, 7, 1), title: "Books", amount: 740 },
  { id: "a6", date: new Date(2019, 8, 5), title: "Rent", amount: 5500 },
  { id: "a7", date: new Date(2021, 9, 26), title: "Travelling", amount: 3400 },
  {
    id: "a8",
    date: new Date(2022, 2, 18),
    title: "EMI",
    amount: 3450,
  },
];
const App = () => {
  const [data, setData] = useState(dummyData);
  const [filteredData, setFilteredData] = useState(data);

  const saveExpenseDataHandler = (getExpenseData) => {
    const expenseData = { ...getExpenseData };
    console.log(expenseData);
    setData((dummyData) => {
      return [expenseData, ...dummyData];
    });
    // (or) setData([expenseData, ...dummyData]);
  };
  // console.log(data);

  return (
    <div className="App">
      <NewExpense getSaveExpenseDataHandler={saveExpenseDataHandler} />
      <Expenses data={data} />
    </div>
  );
};

export default App;
