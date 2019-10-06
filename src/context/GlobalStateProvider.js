import React, { useReducer, createContext } from "react";

export const cards = [
  {
    title: "Project Title: Dashboard",
    lists: {
      "Build UI": [
        {
          title: "Pick Design Library",
          id: 1,
          comments: ["Check out MaterializeCSS", "ANT CSS"],
          options: {
            hide: false
          }
        },
        { title: "Add basic layout", id: 2 }
      ],
      "Beta Testing": [
        { title: "Pick Design Library", id: 1 },
        {
          title: "Add basic layout",
          id: 2,
          comments: ["Structure routing", "Dont focus on styles"],
          options: {
            hide: false
          }
        }
      ]
    }
  },
  {
    title: "Project Title: Dashboard",
    lists: {
      "Build UI": [
        {
          title: "Pick Design Library",
          id: 1,
          comments: ["Check out MaterializeCSS", "ANT CSS"],
          options: {
            hide: false
          }
        },
        { title: "Add basic layout", id: 2 }
      ],
      "Beta Testing": [
        { title: "Pick Design Library", id: 1 },
        {
          title: "Add basic layout",
          id: 2,
          comments: ["Structure routing", "Dont focus on styles"],
          options: {
            hide: false
          }
        }
      ]
    }
  }
];

export const initialState = cards;

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
