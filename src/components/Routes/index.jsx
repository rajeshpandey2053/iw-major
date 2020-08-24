import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import PostComponent from "../Dashboard/PostComponent";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/:postSlug" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/try" component={PostComponent} />
      </Switch>
    </React.Fragment>
  );
};
export default Routes;
