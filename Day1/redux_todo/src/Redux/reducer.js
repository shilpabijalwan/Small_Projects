import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_SUCCESS,
  POST_TODO_REQUEST,
} from "./actionTypes";

const intialState = {
  todos: [],
  isLoading: false,
  isError: false,
};
export function reducer(state = intialState, { type, payload }) {
  switch (type) {
    case GET_TODO_REQUEST: {
      return {
        ...state,
        isLoding: true,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        isLoding: false,
        todos: [...payload],
      };
    }
    case GET_TODO_FAILURE: {
      return {
        ...state,
        isLoding: false,

        isError: true,
      };
    }
    case POST_TODO_REQUEST: {
      return {
        ...state,
        isLoding: true,
      };
    }
    case POST_TODO_SUCCESS: {
      return {
        ...state,
        isLoding: false,
        todos: [...state.todos, payload],
      };
    }

    case POST_TODO_FAILURE: {
      return {
        ...state,
        isLoding: false,
        isError: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
