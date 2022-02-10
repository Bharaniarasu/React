import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // let title = props.expense;

  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.amount);
  // console.log(title);
  // console.log(price);

  // const clickHandler = () => {
  //   setTitle("i am updated!!!!!!!");

  //   setPrice("0000");
  //   // alert(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
      {/* <button onClick={clickHandler}>Change</button> */}
      {/* {setTimeout(clickHandler, 5000)} */}
    </Card>
  );
};
export default ExpenseItem;
