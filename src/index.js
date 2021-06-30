import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store"
import { Provider } from "react-redux";
import "./assets/styles/index.css";
import App from "./routes/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);