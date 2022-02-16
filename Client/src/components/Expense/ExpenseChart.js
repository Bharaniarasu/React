import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  //   console.log(props.onExpenseYear);

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.onExpenseYear) {
    const expenseMonth = new Date(expense.Date).getMonth();
    // console.log(chartDataPoints[expenseMonth].value);
    chartDataPoints[expenseMonth].value += +expense.Amount;
    // console.log(chartDataPoints[expenseMonth].value);
  }
  // console.log(chartDataPoints);
  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpenseChart;
