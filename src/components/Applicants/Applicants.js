import React, { useState } from "react";

import Card from "../UI/Card";
import ApplicantGradYearFilter from "./ApplicantGradYearFilter";
import ApplicantList from "./ApplicantList";
import RatingsChart from "./RatingsChart"
import "./Applicants.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ApplicantGradYearFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <RatingsChart expenses ={filteredExpenses}/>
        <ApplicantList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
