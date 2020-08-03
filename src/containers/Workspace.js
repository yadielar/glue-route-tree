import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export function Workspace({ children }) {
  React.useEffect(() => {
    console.log("Workspace mount");
    return () => {
      console.log("Workspace umount");
    };
  }, []);

  return (
    <Layout header={<TopNav />} sidebar={<Sidebar />}>
      <PrimaryView>{children}</PrimaryView>
    </Layout>
  );
}

function TopNav() {
  return (
    <div>
      <strong style={{ color: "blue" }}>
        <em>
          <Link to="/">glue</Link>
        </em>
      </strong>
    </div>
  );
}

function Sidebar() {
  return <div>Sidebar</div>;
}

function PrimaryView({ children }) {
  return <div>{children}</div>;
}
