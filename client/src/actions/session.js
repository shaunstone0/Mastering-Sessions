import axios from "axios";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "./types";
import { receiveErrors } from "./error";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const register = (user) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(user);
  try {
    const res = await axios.post("/api/auth/register", body, config);
    if (res) {
      return dispatch(receiveCurrentUser(res));
    }
  } catch (err) {
    return dispatch(receiveErrors(err));
  }
};

export const login = (user) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(user);
  try {
    const res = await axios.post("/api/auth/login", body, config);
    if (res) {
      return dispatch(receiveCurrentUser(res.data));
    }
  } catch (err) {
    return dispatch(receiveErrors(err));
  }
};

export const logout = (user) => async (dispatch) => {
  try {
    const res = await axios.delete("/api/auth/logout");
    if (res) {
      return dispatch(logoutCurrentUser());
    }
  } catch (err) {
    return dispatch(receiveErrors(err));
  }
};
