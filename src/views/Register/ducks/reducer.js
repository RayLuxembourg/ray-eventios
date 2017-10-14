import { Map } from "immutable";
import {REGISTER,REGISTER_SUCCESS,REGISTER_FAIL} from "./types";
const initialState = Map({
  loading: false,
  error: null,
  success: false,
  createdUser: Map()
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case REGISTER:
      return state.merge({
        loading: true,
        error: null,
        success: false,
        user: Map()
      });
    case REGISTER_SUCCESS:
      return state.merge({
        loading: false,
        createdUser: Map(action.payload),
        success: true
      });
    case REGISTER_FAIL:
      return state.merge({ loading: false, error: true, success: false });
    default:
      return state;
  }
}