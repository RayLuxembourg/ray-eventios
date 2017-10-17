import { Map } from "immutable";
import { combineReducers } from "redux-immutable";
import { loadUser } from "../../../utils";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_DONE } from "./types";
const storedUser = () => {
  const user = loadUser();
  if (user) {
    return Map(user);
  }
  return Map();
};

const error = (state = false, action) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return true;
    case LOGIN:
    case LOGIN_SUCCESS:
    case LOGIN_DONE:
      return false;
    default:
      return state;
  }
};
const loading = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGIN_SUCCESS:
    case LOGIN_FAIL:
    case LOGIN_DONE:
      return false;
    default:
      return state;
  }
};
const success = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
    case LOGIN_FAIL:
    case LOGIN_DONE:
      return false;
    case LOGIN_SUCCESS:
      return true;
    default:
      return state;
  }
};
const user = (state = storedUser(), action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Map(action.payload);
    default:
      return state;
  }
};
export default combineReducers({
  loading,
  user,
  error,
  success
});
