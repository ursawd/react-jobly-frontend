import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import Signup from "./Signup";
import NavBar from "./NavBar";

const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <LoginForm />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/companies">
          <Companies />
        </Route>

        <Route exact path="/jobs">
          <Jobs />
        </Route>

        <Route exact path="/companies/:handle">
          <Company />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
};
export default Routes;
