import React from "react";

import Chart from "../Chart/Chart";

const RatingsChart = (props) => {
  const chartDataPoints = [
    { label: "Bob", value: 0 },
    { label: "Jen", value: 0 },
    { label: "Dav", value: 0 },
    { label: "Noa", value: 0 },
    { label: "Ada", value: 0 },
    { label: "Lil", value: 0 },
    { label: "Jas", value: 0 },
    { label: "Cin", value: 0 },
    { label: "And", value: 0 },
    { label: "Joh", value: 0 },
    { label: "Sar", value: 0 },
    { label: "Ang", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  //everything here needs to be changed, but we need to see first 
  

  return <Chart dataPoints={chartDataPoints} />;
};

export default RatingsChart;
