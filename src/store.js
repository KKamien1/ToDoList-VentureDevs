import { createStore, applyMiddleware, compose } from "redux";
import { loadState, saveState } from "./localStorage";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
