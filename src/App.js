import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NewApplication from "./components/NewApplication/NewAppication";
import Applicants from "./components/Applicants/Applicants";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import Welcome from "./welcomepage/Welcome";
import Home from "./pages/Home";
import Application from "./pages/Application";
import Review from "./pages/Review";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Apply", element: <Application /> },
  { path: "/Review", element: <Review /> },
  { path: "/Welcome", element: <Welcome /> },
]);

const DUMMY_EXPENSES = [
  {
    id: "e1",
    major: "CSBA & PSYC",
    title: "David Yu",
    amount: 2.61,
    date: new Date(2025, 5, 1),
    shortQ01: "i like food",
  },
  {
    id: "e2",
    major: "CSBA",
    title: "Noah Liu",
    amount: 3.54,
    date: new Date(2025, 5, 1),
    shortQ01: "no",
  },
  {
    id: "e3",
    major: "CSBA",
    title: "Jasper Sun",
    amount: 4.27,
    date: new Date(2024, 5, 1),
    shortQ01: "yes",
  },
  {
    id: "e4",
    major: "CSBA",
    title: "Adam Yang",
    amount: 3.69,
    date: new Date(2025, 5, 1),
    shortQ01: "i dont like food",
  },
];

const App = () => {
  return <RouterProvider router={router} />;

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    //
  };

  return (
    <div>
      <Welcome></Welcome>
    </div>
  );
};

export default App;
