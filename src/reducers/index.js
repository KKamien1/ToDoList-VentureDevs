import { combineReducers } from "redux";

import todosReducer from "./todosReducer";
import filterReducer from "./filterReducer";

//export default combineReducers(reducers);
export default combineReducers({
  todos: todosReducer,
  filterType: filterReducer
});
