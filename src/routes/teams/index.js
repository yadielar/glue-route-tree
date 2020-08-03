import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ChooseTeam } from "../../screens/teams/ChooseTeam";
import { CreateTeam } from "../../screens/teams/CreateTeam";

export function TeamsRoutes() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <ChooseTeam />
      </Route>
      <Route path={`${path}/new`}>
        <CreateTeam />
      </Route>
    </Switch>
  );
}
