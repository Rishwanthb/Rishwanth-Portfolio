import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Profile from "./views/profile/profile.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Profile {...props} />} />
      <Route path="/profile" render={(props) => <Profile {...props} />} />
      <Redirect from="/profile" to="/profile" />
      <Redirect from="/" to="/profile" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
