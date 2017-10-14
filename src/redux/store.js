import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./modules";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares), devtools()];

  const store = createStore(rootReducer, initialState, compose(...enhancers));
  sagaMiddleware.run(rootSaga);

  store.asyncReducers = {};
  return store;
}
