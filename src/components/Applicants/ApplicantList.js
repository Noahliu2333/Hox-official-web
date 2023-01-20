import React from "react";

import "./ApplicantList.css";
import ApplicantItem from "./ApplicantItem";

const ApplicantList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no applicant.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ApplicantItem
          key={expense.id}
          title={expense.title}
          major={expense.major}
          amount={expense.amount}
          date={expense.date}
          shortQ01={expense.shortQ01}
        />
      ))}
    </ul>
  );
};

export default ApplicantList;
