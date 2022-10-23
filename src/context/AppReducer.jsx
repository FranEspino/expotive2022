import {
  IS_DARK_MODE,
  } from "./AppTypes";
  
  export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
      case IS_DARK_MODE:{
        return {
        ...state,
        is_dark_mode: payload
        }
      }

      default:
        return state;
    }
  };
  