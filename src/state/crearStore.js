import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
// import rootEpic from './epics';
const reduxDevTools = (() => {
  if (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    //return window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  return undefined;
})();

const initialState = {};
// const createStore = () => reduxCreateStore(reducer,initialState)
export default () => {
  //   const middlewares = [];

  const middlewares = [thunk];
  const epicmiddleware = createEpicMiddleware();
  middlewares.push(epicmiddleware);

  const configureStore = applyMiddleware(...middlewares)(createStore);
  const store = configureStore(rootReducer, initialState, reduxDevTools);
  // epicmiddleware.run(rootEpic());
  return store;
};
