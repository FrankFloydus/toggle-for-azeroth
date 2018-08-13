import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import registerServiceWorker from "./registerServiceWorker";
import "./global.css";

ReactDOM.render(<AppRouter />, document.getElementById("root"));
registerServiceWorker();
