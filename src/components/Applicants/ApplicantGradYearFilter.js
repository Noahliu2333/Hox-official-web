import React from "react";

import "./ApplicantGradYearFilter.css";

const ApplicantGradYearFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by graduation year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>
    </div>
  );
};

export default ApplicantGradYearFilter;
