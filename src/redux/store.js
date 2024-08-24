

import { legacy_createStore, compose, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import rootReducer from './reducers/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;