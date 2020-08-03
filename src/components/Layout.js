import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

export function Layout({ children }) {
  return (
    <div className="root">
      <div className="header">
        <strong style={{ color: "blue" }}>
          <em>
            <Link to="/">glue</Link>
          </em>
        </strong>
      </div>
      <div className="body">{children}</div>
      <div className="footer">---</div>
    </div>
  );
}
