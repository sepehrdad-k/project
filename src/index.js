import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "../styles/styles.scss";

ReactDOM.render(<App />, document.getElementById("root"));
if (module.hot) {
  module.hot.accept();
}
