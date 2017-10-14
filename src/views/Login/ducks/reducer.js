import { Map } from "immutable";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./types";
const storedUser = () =>{
  const user = JSON.parse(localStorage.getItem("user"));
  if(user){
    return Map(user);
  }
  return Map()
}
const initialState = Map({
  loading: false,
  error: null,
  success: false,
  user: storedUser()
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return state.merge({
        loading: true,
        error: null,
        success: false,
        user: Map()
      });
    case LOGIN_SUCCESS:
      return state.merge({
        loading: false,
        user: Map(action.payload),
        success: true
      });
    case LOGIN_FAIL:
      return state.merge({ loading: false, error: true, success: false });
    default:
      return state;
  }
}
