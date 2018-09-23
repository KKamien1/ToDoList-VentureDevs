import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import filterReducer from "./filterReducer";

//export default combineReducers(reducers);
export default combineReducers({
  todos: todoReducer,
  filter: filterReducer
});
