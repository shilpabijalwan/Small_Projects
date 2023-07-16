import { combineReducers, legacy_createStore } from "redux";
import { reducer as todoReducer } from "./reducer";

import { reducer as authReducer } from "../Auth/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});
export const store = legacy_createStore(rootReducer);
 