import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "../styles/styles.scss";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
const ham = document.querySelector(".hamburger");
const menue = document.querySelector(".nav-bar");
ham.addEventListener("click", function () {
  this.classList.toggle("open");
  menue.classList.toggle("active");
});

if (module.hot) {
  module.hot.accept();
}
