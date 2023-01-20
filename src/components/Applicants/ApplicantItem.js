import React, { useState } from "react";

import ApplicantGradDate from "./ApplicantGradDate";
import Card from "../UI/Card";
import "./ApplicantItem.css";
import "./SeeMore.css";

const ApplicantItem = (props) => {
  const [expanding, setExpanding] = useState(false);

  const expandingHandler = () => {
    setExpanding(true);
  };
  const retractingHandler = () => {
    setExpanding(false);
  };

  return (
    <li>
      <Card className="expense-item">
        <ApplicantGradDate date={props.date} />
        <div className="expense-item__description">
          <h2>
            <span class="title">{props.title}</span>
          </h2>
          <div className="expense-item__price">
            {props.amount.toPrecision(2)}
          </div>
          <button onClick={expandingHandler} className="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">see more</span>
          </button>

          {expanding && (
            <div>
              <Card className="expense-item">test</Card>
              <button type="button" onClick={retractingHandler}>
                See less
              </button>
            </div>
          )}
        </div>
      </Card>
    </li>
  );
};

export default ApplicantItem;
