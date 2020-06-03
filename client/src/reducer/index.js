import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore } from "redux";

import authReducer from "./authReducer";

import errorReducer from "./errorReducer";
import hotelReducer from './hotelReducer'
const rootReducers = combineReducers({
  auth: authReducer,
  error: errorReducer,
  hotel:hotelReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
