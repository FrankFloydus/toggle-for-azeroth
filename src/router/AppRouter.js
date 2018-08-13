import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Alliance from "../components/Alliance";
import Horde from "../components/Horde";
import NotFound from "../components/NotFound";
import TopBar from "../components/TopBar";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <TopBar />
        <Header />
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} component={Home} exact />
          <Route
            path={process.env.PUBLIC_URL + "/alliance"}
            component={Alliance}
          />
          <Route path={process.env.PUBLIC_URL + "/horde"} component={Horde} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
