import React from "react";
import { useAppStore } from "../../store";
import { Redirect, useParams } from "react-router-dom";

function Loader() {
  return <div>Waiting for resource...</div>;
}

export function TeamHome() {
  const [state] = useAppStore();
  const { teamId } = useParams();
  const { windowType, activeResource } = state;

  switch (windowType) {
    case "iframe": {
      if (activeResource === null) {
        return <Loader />;
      } else {
        return <Redirect to={`/team/${teamId}/resources/lookup`} />;
      }
    }
    case "top": {
      return <Redirect to={`/team/${teamId}/channels`} />;
    }
    default: {
      return <Loader />;
    }
  }
}
