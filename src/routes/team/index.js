import React from "react";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { TeamHome } from "../../screens/team/TeamHome";
import { ChannelDetail } from "../../screens/team/ChannelDetail";
import { ResourceLookup } from "../../screens/team/ResourceLookup";
import { EditResource } from "../../screens/team/EditResource";
import { CreateResource } from "../../screens/team/CreateResource";
import { ResourceDetail } from "../../screens/team/ResourceDetail";

export function TeamRoutes() {
  let { path } = useRouteMatch();
  let { teamId } = useParams();
  let lastViewedChannelId = 1;

  return (
    <Switch>
      <Route exact path={path}>
        <TeamHome />
      </Route>

      {/* Only on webapp */}
      <Route path={`${path}/channels/:channelId`}>
        <ChannelDetail />
      </Route>
      <Redirect
        from={`${path}/channels`}
        to={`/team/${teamId}/channels/${lastViewedChannelId}`}
      />

      {/* Only on extension */}
      <Route path={`${path}/resources/:resourceId/edit`}>
        <EditResource />
      </Route>
      <Route path={`${path}/resources/lookup`}>
        <ResourceLookup />
      </Route>
      <Route path={`${path}/resources/new`}>
        <CreateResource />
      </Route>
      <Route path={`${path}/resources/:resourceId`}>
        <ResourceDetail />
      </Route>
    </Switch>
  );
}
