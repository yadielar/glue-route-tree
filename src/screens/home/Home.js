import React from "react";
import { Redirect } from "react-router-dom";

export function Home() {
  const lastTeamId = 1;
  return <Redirect to={`/team/${lastTeamId}`} />;
}
