import {
  CLEAR_ERRORS,
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../../actions/types";
export default (state = "", { message, type }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_ERRORS:
      return message;
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return "";
    default:
      return state;
  }
};
