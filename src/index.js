import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "../styles/styles.scss";

const preload = document.querySelector(".preload");
const fadepreload = () => {
  preload.classList.add("fade");
};
const hidepreload = () => {
  preload.remove();
};

ReactDOM.render(
  <App fadepreload={fadepreload} hidepreload={hidepreload} />,
  document.getElementById("root")
);
if (module.hot) {
  module.hot.accept();
}
