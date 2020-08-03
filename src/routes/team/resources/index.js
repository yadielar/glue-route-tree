import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { EditResource } from "../../../screens/team/resources/EditResource";
import { ResourceLookup } from "../../../screens/team/resources/ResourceLookup";
import { CreateResource } from "../../../screens/team/resources/CreateResource";
import { ResourceDetail } from "../../../screens/team/resources/ResourceDetail";

export function TeamResourcesRoutes() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      {/** /team/:teamId/resources/:resourceId/edit */}
      <Route path={`${path}/:resourceId/edit`}>
        <EditResource />
      </Route>
      {/** /team/:teamId/resources/lookup */}
      <Route path={`${path}/lookup`}>
        <ResourceLookup />
      </Route>
      {/** /team/:teamId/resources/new */}
      <Route path={`${path}/new`}>
        <CreateResource />
      </Route>
      {/** /team/:teamId/resources/:resourceId */}
      <Route path={`${path}/:resourceId`}>
        <ResourceDetail />
      </Route>
    </Switch>
  );
}
