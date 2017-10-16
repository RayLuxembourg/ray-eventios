import { combineReducers } from "redux-immutable";
import { Map } from "immutable";
import {
  GET_EVENT_BY_ID,
  GET_EVENT_BY_ID_SUCCESS,
  GET_EVENT_BY_ID_FAIL,
  ATTEND_EVENT,
  ATTEND_EVENT_SUCCESS,
  ATTEND_EVENT_FAIL,
  UNATTEND_EVENT,
  UNATTEND_EVENT_SUCCESS,
  UNATTEND_EVENT_FAIL
} from "./types";


const event = (state = Map(), action) => {
  switch (action.type) {
    case GET_EVENT_BY_ID_SUCCESS:
      return Map(action.payload.result);
    case ATTEND_EVENT_SUCCESS:
    case UNATTEND_EVENT_SUCCESS:
      return Map(action.payload.result);
    default:
      return state;
  }
};
const attendees = (state = Map(), action) => {
  switch (action.type) {
    case GET_EVENT_BY_ID_SUCCESS:
      return Map(action.payload.entities.attendees);
    case ATTEND_EVENT_SUCCESS:
    case UNATTEND_EVENT_SUCCESS:
      return Map(action.payload.entities.attendees);
    default:
      return state;
  }
};
export default combineReducers({
  event,
  attendees
})

