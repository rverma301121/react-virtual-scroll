import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import favoriteReducer from "./reducers/favoriteReducers";
import { composeWithDevTools } from "@redux-devtools/extension";

const reducer = combineReducers({
  favorite: favoriteReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
