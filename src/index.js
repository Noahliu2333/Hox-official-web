import ReactDOM from "react-dom/client";
//we always import this so we can use react

import "./index.css";
//this is the css for the page
import App from "./App";
//app is the main component, we render it here in index

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//dcaonimadnfsoj

//we write code in a syntax that is not quite javascript
//but the end result will be translated (and compiled in a weird way) so that we will have a working&better-functioning product
//example: import './index.css'; AND root.render(<App />);
