import { Map, List } from "immutable";
import { combineReducers } from "redux-immutable";

import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS,
  GET_EVENTS_FAIL,
  CREATE_EVENT,
  CREATE_EVENT_FAIL,
  CREATE_EVENT_SUCCESS,
  UPDATE_EVENT,
  UPDATE_EVENT_FAIL,
  UPDATE_EVENT_SUCCESS,
  REMOVE_EVENT_SUCCESS,
  ATTEND_EVENT_SUCCESS,
  ATTEND_EVENT,
  ATTEND_EVENT_FAIL,
  UNATTEND_EVENT_SUCCESS,
  UNATTEND_EVENT,
  UNATTEND_EVENT_FAIL
} from "./types";

const loading = (state = false, action) => {
  switch (action.type) {
    case GET_EVENTS:
    case UPDATE_EVENT:
    // case ATTEND_EVENT:
    // case UNATTEND_EVENT:
      return true;
    case GET_EVENTS_SUCCESS:
    case GET_EVENTS_FAIL:
    case UPDATE_EVENT_SUCCESS:
    case UPDATE_EVENT_FAIL:
    case ATTEND_EVENT_SUCCESS:
    case ATTEND_EVENT_FAIL:    
    case UNATTEND_EVENT_SUCCESS:
    case UNATTEND_EVENT_FAIL:    
    case CREATE_EVENT_SUCCESS:
    case CREATE_EVENT_FAIL:    
    case REMOVE_EVENT_SUCCESS:
      return false;
    default:
      return state;
  }
};
const all = (state = Map(), action) => {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      return Map(action.payload.entities.events);
    case UPDATE_EVENT_SUCCESS:
    case ATTEND_EVENT_SUCCESS:
    case UNATTEND_EVENT_SUCCESS:
    case CREATE_EVENT_SUCCESS:
      return state.set(action.payload.result.id, action.payload.result);
    case REMOVE_EVENT_SUCCESS:
      return state.delete(action.payload.id);

    default:
      return state;
  }
};
const attendees = (state = Map(), action) => {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      return Map(action.payload.entities.attendees);
    case ATTEND_EVENT_SUCCESS:
    case UNATTEND_EVENT_SUCCESS:
      return state.merge(action.payload.entities.attendees);
    default:
      return state;
  }
};
const ids = (state = List(), action) => {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      return List(action.payload.result);
    case REMOVE_EVENT_SUCCESS:
      return state.delete(state.indexOf(action.payload.id));
    case CREATE_EVENT_SUCCESS:
      return state.push(action.payload.result.id);
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  all,
  attendees,
  loading
});
