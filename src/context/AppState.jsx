import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import {AppContext} from "./AppContext";
export const AppState = (props) => {

  const initialState = {
    is_dark_mode: true,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const isDarkMode = (id) => {
    dispatch({
      type: 'IS_DARK_MODE',
      payload: id,
    });
  } 



  return (
    <AppContext.Provider
      value={{
        ...state,
        isDarkMode
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

