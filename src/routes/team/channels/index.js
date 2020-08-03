import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ChannelDetail } from "../../../screens/team/channels/ChannelDetail";
import { ChannelLastVisited } from "../../../screens/team/channels/ChannelLastVisited";

export function TeamChannelsRoutes() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      {/** /team/:teamId/channels/:channelId */}
      <Route path={`${path}/:channelId`}>
        <ChannelDetail />
      </Route>
      {/** /team/:teamId/channels */}
      <Route path={`${path}`}>
        <ChannelLastVisited />
      </Route>
    </Switch>
  );
}
