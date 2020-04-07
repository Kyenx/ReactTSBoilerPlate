import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

import appReducer from "./reducer";
// import appEpic from "./epics";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configStore() {
  const store = createStore(
    appReducer,
    composeEnchancer()
  );
  return store;
}