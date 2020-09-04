import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root";

const middleware = [thunk];

export default (preloadedState) =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
