import { call, put, takeLatest } from "redux-saga/effects";
import { normlizeEventList, normlizeEvent } from "./schema";
import { EventsApi } from "../../../api";
import {
  GET_EVENTS,
  GET_EVENTS_SUCCES,
  GET_EVENTS_FAIL,
  POST_EVENTS,
  POST_EVENTS_SUCCES,
  POST_EVENTS_FAIL,
  UPDATE_EVENT,
  UPDATE_EVENT_SUCCES,
  UPDATE_EVENT_FAIL,
  ATTEND_EVENT,
  ATTEND_EVENT_SUCCESS,
  ATTEND_EVENT_FAIL,
  UNATTEND_EVENT,
  UNATTEND_EVENT_SUCCESS,
  UNATTEND_EVENT_FAIL
} from "./types";
function* getEvents(action) {
  try {
    console.log("GET EVENTS");
    const { data } = yield call(EventsApi.getEvents);

    yield put({ type: GET_EVENTS_SUCCES, payload: normlizeEventList(data) });
  } catch (e) {
    yield put({ type: GET_EVENTS_FAIL, payload: e });
  }
}
function* postEvent(action) {
  try {
    const { data } = yield call(EventsApi.postNewEvent, action.payload);
    yield put({ type: POST_EVENTS_SUCCES, payload: normlizeEvent(data) });
  } catch (e) {
    yield put({ type: POST_EVENTS_FAIL });
  }
}
function* updateEvent(action) {
  try {
    const { data } = yield call(EventsApi.updateEvent, action.payload.id,action.payload.data);

    yield put({ type: UPDATE_EVENT_SUCCES,payload:normlizeEvent(data)});
  } catch (e) {
    yield put({ type: UPDATE_EVENT_FAIL, payload: e });
  }
}
function* attendEvent(action) {
  try {
    const { data } = yield call(EventsApi.attendEvent, action.payload);
    yield put({ type: ATTEND_EVENT_SUCCESS, payload: normlizeEvent(data) });
  } catch (e) {
    yield put({ type: ATTEND_EVENT_FAIL });
  }
}
function* unAttendEvent(action) {
  try {
    const { data } = yield call(EventsApi.unAttendEvent, action.payload);
    yield put({ type: UNATTEND_EVENT_SUCCESS, payload: normlizeEvent(data) });
  } catch (e) {
    yield put({ type: UNATTEND_EVENT_FAIL });
  }
}
 function* getEventsSaga() {
  yield takeLatest(GET_EVENTS, getEvents);
}
function* updateEventSaga() {
  yield takeLatest(UPDATE_EVENT, updateEvent);
}
function* postEventSaga() {
  yield takeLatest(POST_EVENTS, postEvent);
}
function* attendEventSaga() {
  yield takeLatest(ATTEND_EVENT, attendEvent);
}
function* unAttendEventSaga() {
  yield takeLatest(UNATTEND_EVENT, unAttendEvent);
}

export {
  getEventsSaga,
  updateEventSaga,
  attendEventSaga,
  unAttendEventSaga,
  postEventSaga
};
