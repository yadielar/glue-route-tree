import React from "react";
import { Switch, Route } from "react-router-dom";
import { TeamsRoutes } from "./teams";
import { TeamRoutes } from "./team";
import { Home } from "../screens/home/Home";
import { RegisterPage } from "../screens/register/RegisterPage";
import { LoginPage } from "../screens/login/LoginPage";

export function RootRoutes() {
  return (
    <Switch>
      <Route path="/teams">
        <TeamsRoutes />
      </Route>
      <Route path="/team">
        <TeamRoutes />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}
