import React, { useState } from "react";
import "./NewApplication.css";
import "./InputDynamic.css";
//import SimpleInput from "./SimpleInput";
//import StatusBar from "./StatusBar";

const NewApplication = (props) => {
  const rootURL =
    "http://hoxwebsite-env.eba-kvejeebg.us-east-1.elasticbeanstalk.com";
  const [isEditing, setIsEditing] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredMajor, setEnteredMajor] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredShortQ01, setEnteredShortQ01] = useState("");
  const [enteredID, setID] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [seeResults, setSeeResults] = useState(false);
  const [status, setStatus] = useState("");
  const [isApplicantExists, setIsApplicantExists] = useState(false);
  //we can do it with one state
  /*
  const [userInput, setUserInput]=useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });
  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const majorChangeHandler = (event) => {
    setEnteredMajor(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const shortQ01ChangeHandler = (event) => {
    setEnteredShortQ01(event.target.value);
  };

  const IDChangeHandler = (event) => {
    setID(event.target.value);
  };

  const submitInfoFunc = async (userData, submitURL) => {
    const data = await fetch(submitURL, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: userData, // body data type must match "Content-Type" header
    });
    const res = await data.json();
    console.log(res);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      major: enteredMajor,
      amount: enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
      shortQ01: enteredShortQ01,
    };
    let URL = rootURL + `/applicant`;

    let applicantData = `
    {
      "id":"${enteredShortQ01}",
      "firstName":"${enteredTitle}",
      "lastName":"${enteredMajor}",
      "status": "SUBMITTED"
    }
    `;
    console.log(applicantData);
    await submitInfoFunc(applicantData, URL);
    // props.onAddExpense(rexpenseData); // no such function bro
    setIsEditing(false);

    setEnteredTitle("");
    setEnteredMajor("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredShortQ01("");

    setSubmitted(true);

    window.open("https://forms.gle/rncd4LEE8D3sVkmAA");
  };

  //this is a two way binding, by adding value = {enteredData} and resettign everything in the end
  //we can refresh the form

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditinglHandler = () => {
    setIsEditing(false);
  };

  const startSearchingHandler = () => {
    setIsSearching(true);
    setSeeResults(false);
  };

  const stopSearchinglHandler = () => {
    setIsSearching(false);
  };

  const getResult = async (ID) => {
    let data = {};
    let URL = rootURL + `/applicant/${ID}`;
    const res = await fetch(URL);
    try {
      data = await res.json();
      setStatus(data.status);
      setIsApplicantExists(true);
    } catch {
      setIsApplicantExists(false);
      setStatus("Invalid USC ID / no record");
    }
  };

  const submitSearchHandler = (event) => {
    event.preventDefault();
    getResult(enteredID);
    setID("");
    setEnteredTitle("");

    setSeeResults(true);
  };

  return (
    <div className="new-expense">
      {!submitted && !isEditing && !isSearching && (
        <>
          <button id="button-1" onClick={startEditingHandler}>
            Fill Out Application
          </button>
          <button id="button-2" onClick={startSearchingHandler}>
            Track My Progress
          </button>
        </>
      )}
      {!submitted && isEditing && (
        <form onSubmit={submitHandler} target="_blank">
          <div className="new-expense__controls">
            <div className="wave-group">
              <input
                required
                type="text"
                className="input"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char">First Name (English Please)</span>
              </label>
            </div>

            <div className="new-expense__control ">
              <label>Expected Graduation Date</label>
              <input
                required
                type="date"
                min="2023-05-01"
                max="2027-05-01"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>

            <div className="wave-group">
              <input
                required
                type="text"
                className="input"
                value={enteredMajor}
                onChange={majorChangeHandler}
              />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char"> Last Name (English Please) </span>
              </label>
            </div>

            <div className="new-expense__control">
              <label>GPA</label>
              <input
                required
                type="number"
                min="2.0"
                step="0.1"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>

            <div className="wave-group">
              <input
                required
                type="text"
                className="input"
                value={enteredShortQ01}
                onChange={shortQ01ChangeHandler}
                minLength="10"
                maxLength="10"
              />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char"> USC ID </span>
              </label>
            </div>
          </div>

          <div className="new-expense__actions">
            <button type="button" onClick={stopEditinglHandler}>
              Cancel
            </button>
            <button type="submit">Submit Form</button>
          </div>
        </form>
      )}
      {submitted && (
        <div className="results">
          <div class="spinner" />
          <h1>Thank you for your submission, we are reviewing it right now.</h1>
        </div>
      )}
      {!seeResults && isSearching && (
        <div className="new-expense__control">
          <div className="wave-group">
            <label>USC ID:</label>
            <input type="text" value={enteredID} onChange={IDChangeHandler} />
          </div>

          <div className="new-expense__control">
            <button type="buttonSmall" onClick={submitSearchHandler}>
              Check Status
            </button>

            <button type="buttonSmall" onClick={stopSearchinglHandler}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {seeResults && isApplicantExists && (
        <div className="results">
          <h2> Your status is: {status}</h2>
        </div>
      )}
      {seeResults && !isApplicantExists && (
        <div>
          <div className="results">
            <h2> {status}</h2>
          </div>
          <button
            className="button-3"
            type="buttonSmall"
            onClick={startSearchingHandler}
          >
            Search Again
          </button>
        </div>
      )}
    </div>
  );
};

export default NewApplication;
