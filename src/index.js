import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Horde from "./Horde";
import Alliance from "./Alliance";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";

const routes = (
  <BrowserRouter>
    <div>
      <TopBar />
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/horde" component={Horde} />
      <Route path="/alliance" component={Alliance} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
registerServiceWorker();
