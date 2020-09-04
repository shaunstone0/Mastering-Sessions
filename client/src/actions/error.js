import { RECEIVE_ERRORS, CLEAR_ERRORS } from "./types";

export const receiveErrors = ({ message }) => ({
  type: RECEIVE_ERRORS,
  message,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
