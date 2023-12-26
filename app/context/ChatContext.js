"use client"
import React, { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

// Define the initial state outside the component to avoid re-creation on each render
const INITIAL_STATE = {
  chatId: "null",
  user: {
    uid: "",
    photoURL: "", // Provide a default value or make it optional
    // Other properties...
  },
};

// Create ChatContext with default values
export const ChatContext = createContext({
  data: INITIAL_STATE,
  dispatch: () => {},
});

// ChatContextProvider component
export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  // Reducer function
  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        // Ensure currentUser and currentUser.uid are defined
        if (currentUser && currentUser.uid) {
          return {
            user: action.payload,
            chatId:
              currentUser.uid > action.payload.uid
                ? currentUser.uid + action.payload.uid
                : action.payload.uid + currentUser.uid,
          };
        }
        // Handle the case where currentUser or currentUser.uid is undefined
        return state;

      default:
        return state;
    }
  };

  // useReducer hook
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
