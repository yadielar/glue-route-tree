import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { TeamsRoutes } from "./teams";
import { TeamRoutes } from "./team";
import { Home } from "../screens/home/Home";

export function RootRoutes() {
  return (
    <Switch>
      <Route path="/teams">
        <TeamsRoutes />
      </Route>
      <Route path="/team/:teamId">
        <TeamRoutes />
      </Route>
      <Redirect from="/team" to="/" />
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}
