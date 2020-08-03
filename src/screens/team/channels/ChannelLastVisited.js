import React from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
// import { useAppStore } from "../../store";

export function ChannelLastVisited() {
  let { path, url } = useRouteMatch();
  // const [state] = useAppStore();
  // const { } = state;

  let lastViewedChannelId = 1;

  return <Redirect from={`${path}`} to={`${url}/${lastViewedChannelId}`} />;
}
