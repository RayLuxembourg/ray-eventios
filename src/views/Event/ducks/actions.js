import {
    GET_EVENT_BY_ID,
    UPDATE_EVENT,
    DELETE_EVENT,
    ATTEND_EVENT,
    UNATTEND_EVENT
  } from "./types";
  

  export function getEventsById(id) {
    return { type: GET_EVENT_BY_ID, payload: id };
  }
  export function updateEvent(id, data) {
    return { type: UPDATE_EVENT, payload: { id, data } };
  }
  export function deleteEvent(id) {
    return { type: DELETE_EVENT, payload: id };
  }
  export function attendEvent(id) {
    return { type: ATTEND_EVENT, payload: id };
  }
  export function unAttendEvent(id) {
      return { type: UNATTEND_EVENT, payload: id };
      
  }
  