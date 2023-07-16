import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_SUCCESS,
  POST_TODO_REQUEST,
} from "./actionTypes";

export const GET_TODO_REQUEST_ACTION = () => {
  return { type: GET_TODO_REQUEST };
};
export const GET_TODO_SUCCESS_ACTION = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};
export const GET_TODO_FAILURE_ACTION = () => {
  return { type: GET_TODO_FAILURE };
};

export const POST_TODO_REQUEST_ACTION = () => {
  return { type: POST_TODO_REQUEST };
};
export const POST_TODO_SUCCESS_ACTION = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};
export const POST_TODO_FAILURE_ACTION = () => {
  return { type: POST_TODO_FAILURE };
};
