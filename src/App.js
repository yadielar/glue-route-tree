import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./store";
import { RootRoutes } from "./routes";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <RootRoutes />
      </Router>
    </AppProvider>
  );
}
