import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const LOGIN_REQUEST_ACTION = () => {
  return { type: LOGIN_REQUEST };
};
export const LOGIN_SUCCESS_ACTION = (payload) => {
  return { type: LOGIN_SUCCESS ,payload};
};
export const LOGIN_FAILURE_ACTION = () => {
  return { type: LOGIN_FAILURE };
};
