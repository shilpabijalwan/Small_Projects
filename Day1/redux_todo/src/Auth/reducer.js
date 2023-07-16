import React from "react";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
const intialstate = {
  auth: false,
  token: "",
  isError: false,
  isLoading: false,
};
export function reducer(state = intialstate, { type, payload }) {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,

        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload,
        auth: true,
        isLoading: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
}
