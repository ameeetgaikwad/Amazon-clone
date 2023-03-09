import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(null);

export const StateProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        //Logic
        return { state };

      case "REMOVE_FROM_BASKET":
        //Logic
        return { state };

      default:
        return state;
    }
  };

  const initialState = {
    basket: ["as"],
  };

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
