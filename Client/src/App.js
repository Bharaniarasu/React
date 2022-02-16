import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import AddTask from "./components/ToDo/AddTask";
// import APIsample from "./components/ToDo/APIsample";
// const date = new Date(2021, 3, 14);
// import axios from "axios";

const App = () => {
  const [serverExpenses, setServerExpenses] = useState([
    {
      _id: "1234",
      Date: new Date(2021, 3, 14),
      Expense: "OLD",
      Amount: "111",
      isComplete: false,
      __v: 0,
    },
  ]);
  // const [dummyDb, setDummyDb] = useState([]);

  // console.log("==> " + dummyDb);
  // axios
  //   .get("http://localhost:8000/expenses")
  //   .then((result) => {
  //     console.log(result.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // const dummyData = [
  //   { id: "a1", Date: new Date(2021, 3, 14), Expense: "Food", Amount: 5400 },
  //   {
  //     id: "a2",
  //     Date: new Date(2021, 8, 10),
  //     Expense: "Grocerries",
  //     Amount: 1250,
  //   },
  //   {
  //     id: "a3",
  //     Date: new Date(2019, 5, 11),
  //     Expense: "Vegetables",
  //     Amount: 1250,
  //   },
  // ];

  // const [data, setData] = useState(dummyData);

  useEffect(() => {
    axios
      .get("http://localhost:8000/expenses")
      .then((res) => {
        setServerExpenses(res.data);
        // setDummyDb(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(serverExpenses);
  // const [filteredData, setFilteredData] = useState(data);
  // console.log(data);

  const saveExpenseDataHandler = (getExpenseData) => {
    // const expenseData = { ...getExpenseData };
    // console.log(expenseData);
    // const dbData = [expenseData, ...dummyDb];
    // setData((dummyData) => {
    //   return [expenseData, ...dummyData];
    // });
    // setData(...serverExpenses);
  };
  const addNewExp = (newExp) => {
    setServerExpenses([...serverExpenses, newExp]);
  };
  // console.log(serverExpenses);
  // console.log(data);
  // console.log(dummyDb);
  // console.log(serverExpenses);

  return (
    <div className="App">
      <br />
      <br />
      {/* <AddTask addExp={addNewExp} /> */}
      {/* <APIsample /> */}
      {/* <h2>welcome</h2> */}
      <NewExpense
        getSaveExpenseDataHandler={saveExpenseDataHandler}
        addExpense={addNewExp}
      />
      <Expenses dbExpense={serverExpenses} />
    </div>
  );
};

export default App;
