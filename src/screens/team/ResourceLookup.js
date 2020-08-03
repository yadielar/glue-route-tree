import React from "react";
import { Redirect, Link } from "react-router-dom";
import { useAppStore } from "../../store";
import { Layout } from "../../components/Layout";

export function ResourceLookup() {
  const [state] = useAppStore();
  const { teamId } = state;

  let resourcesFound = [];
  // resourcesFound = [{ id: 1, channelId: 1 }];
  resourcesFound = [{ id: 1, channelId: 1 }, { id: 2, channelId: 2 }];

  if (resourcesFound.length === 0) {
    return <Redirect to={`/team/${teamId}/resources/new`} />;
  }

  if (resourcesFound.length === 1) {
    const resource = resourcesFound[0];
    return <Redirect to={`/team/${teamId}/resources/${resource.id}`} />;
  }

  return (
    <Layout>
      <h2>Choose Channel</h2>
      <ul>
        {resourcesFound.map(resource => (
          <li key={resource.id}>
            <Link to={`/team/${teamId}/resources/${resource.id}`}>
              Resource #{resource.id}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
