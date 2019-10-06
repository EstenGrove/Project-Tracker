import React, { useReducer, createContext } from "react";
import { keyGenerator } from "../utils/keyGenerator";
import { saveToStorage, getFromStorage } from "../utils/localStorageHelpers";

export const cards = [
  {
    id: keyGenerator(),
    title: "Dashboard",
    lists: {
      "Build UI": [
        {
          title: "Pick Design Library",
          id: 12,
          comments: ["Check out MaterializeCSS", "ANT CSS"],
          options: {
            hide: false
          }
        },
        {
          title: "Add basic layout",
          id: 21,
          comments: [],
          options: {
            hide: false
          }
        }
      ],
      "Beta Testing": [
        { title: "Scaffold Global State", id: 13 },
        {
          title: "Map out data structure",
          id: 23,
          comments: ["Consider redux", "Look into MobX"],
          options: {
            hide: false
          }
        }
      ]
    }
  },
  {
    id: keyGenerator(),
    title: "Component Library",
    lists: {
      "State Handling": [
        {
          title: "Create state reducer",
          id: 1,
          comments: [
            "Don't make state too complex",
            "KISS, keep it stupid simple"
          ],
          options: {
            hide: false
          }
        },
        {
          title: "Create context provider",
          id: 2,
          comments: [],
          options: {
            hide: false
          }
        }
      ],
      "Beta Testing": [
        {
          title: "Create Testing Approach",
          id: 1,
          comments: [],
          options: { hide: false }
        },
        {
          title: "Workout testing ideas and concepts",
          id: 2,
          comments: [
            "Remember 'afterEach' cleanup",
            "Dont test implementation details!"
          ],
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
      // first check storage then the db
      return;
    case "FETCH_LISTS":
      return;
    case "FETCH_TASKS":
      return;
    // CREATING
    case "CREATE_CARD":
      const { title, lists } = action.data;
      const newCard = {
        id: keyGenerator(),
        title: title,
        lists: lists
      };
      saveToStorage("CARDS", state);

      return [...state, newCard];
    case "CREATE_LIST":
      const currentID = action.data.id;
      const currentCard = state.filter((card, index) => currentID === card.id);
      const { lists: existingLists } = currentCard;
      const newList = action.data.newList;
      const allLists = { existingLists, newList };
      currentCard.lists = allLists;

      return [...state, currentCard];
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
