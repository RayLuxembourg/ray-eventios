import { GET_EVENTS, ATTEND_EVENT, UNATTEND_EVENT,POST_EVENTS } from "./types";

function getEvents() {
  return { type: GET_EVENTS };
}
function postEvent(event) {
  return { type: POST_EVENTS,payload:event };
}
function attendEvent(id) {
  return { type: ATTEND_EVENT, payload: id };
}
function unAttendEvent(id) {
  return { type: UNATTEND_EVENT, payload: id };
}

export  {
    getEvents,
    attendEvent,
    unAttendEvent,
    postEvent
}
