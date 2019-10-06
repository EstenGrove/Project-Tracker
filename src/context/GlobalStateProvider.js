import React, { useReducer, createContext } from "react";

export const initialState = {};

export const GlobalState = createContext();

export const stateReducer = (state, action) => {
  switch (action.type) {
    // FETCHING
    case "FETCH_CARDS":
      return;
    case "FETCH_LISTS":
      return;
    case "FETCH_TASKS":
      return;
    // CREATING
    case "CREATE_CARD":
      return;
    case "CREATE_LIST":
      return;
    case "CREATE_TASK":
      return;
    // DELETING
    case "DELETE_CARD":
      return;
    case "DELETE_LIST":
      return;
    case "DELETE_TASK":
      return;
    // UPDATING
    case "UPDATE_CARD":
      return;
    case "UPDATE_LIST":
      return;
    case "UPDATE_TASK":
      return;
    default:
      return new Error("Unrecognized action provided");
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      {children}
    </GlobalState.Provider>
  );
};
