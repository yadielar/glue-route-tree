import React from "react";

const AppStateContext = React.createContext();

function getInitialState() {
  return {
    teamId: 1,
    windowType: "top",
    // activeResource: null,
    activeResource: {
      url: "https://gainapp.com",
      name: "Gain App"
    }
  };
}

function stateReducer(state, action) {
  switch (action.type) {
    case "setWindowType":
      return { ...state, windowType: action.payload };
    case "setActiveResource":
      return { ...state, activeResource: action.payload };
    default: {
      return state;
    }
  }
}

export function AppProvider({ children }) {
  const store = React.useReducer(stateReducer, getInitialState());
  return (
    <AppStateContext.Provider value={store}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppStore() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
}
