import { combineReducers } from "redux";
import errors from "./errors/errors";
import session from "./sessions/sessions";
export default combineReducers({
  session,
  errors,
});
