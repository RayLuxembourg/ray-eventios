import { Map } from "immutable";
import {combineReducers} from "redux-immutable";
import {REGISTER,REGISTER_DONE,REGISTER_SUCCESS,REGISTER_FAIL} from "./types";

const error = (state = false, action) => {
  switch (action.type) {
    case REGISTER_FAIL:
      return true;
    case REGISTER:
    case REGISTER_SUCCESS:
    case REGISTER_DONE:
      return false;
    default:
      return state;
  }
};
const loading = (state = false, action) => {
  switch (action.type) {
    case REGISTER:
      return true;
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
    case REGISTER_DONE:
      return false;
    default:
      return state;
  }
};
const success = (state = false, action) => {
  switch (action.type) {
    case REGISTER:
    case REGISTER_FAIL:
    case REGISTER_DONE:
      return false;
    case REGISTER_SUCCESS:
      return true;
    default:
      return state;
  }
};
const createdUser = (state = Map(), action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return Map(action.payload);
    default:
      return state;
  }
};
export default combineReducers({
  loading,
  createdUser,
  error,
  success
});
