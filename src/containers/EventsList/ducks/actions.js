import { GET_EVENTS, ATTEND_EVENT, UNATTEND_EVENT,CREATE_EVENT,UPDATE_EVENT } from "./types";

function getEvents() {
  return { type: GET_EVENTS };
}
function createEvent(event) {
  return { type: CREATE_EVENT,payload:event };
}
function updateEvent(id, data) {
  return { type: UPDATE_EVENT, payload: { id, data } };
}
function attendEvent(id) {
  return { type: ATTEND_EVENT, payload: id };
}
function unAttendEvent(id) {
  return { type: UNATTEND_EVENT, payload: id };
}

export  {
    getEvents,
    updateEvent,
    attendEvent,
    unAttendEvent,
    createEvent
}
