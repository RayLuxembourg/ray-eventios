import { call, put, takeLatest } from "redux-saga/effects";
import { normlizeEventList, normlizeEvent } from "./schema";
import { EventsApi } from "../../../api";
import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  CREATE_EVENT,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  UPDATE_EVENT,
  UPDATE_EVENT_SUCCESS,
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
    const { data } = yield call(EventsApi.getEvents);
    yield put({ type: GET_EVENTS_SUCCESS, payload: normlizeEventList(data) });
  } catch (e) {
    yield put({ type: GET_EVENTS_FAIL, payload: e });
  }
}
function* createEvent(action) {
  try {
    const { data } = yield call(EventsApi.postNewEvent, action.payload);
    yield put({ type: CREATE_EVENT_SUCCESS, payload: normlizeEvent(data) });
  } catch (e) {
    yield put({ type: CREATE_EVENT_FAIL });
  }
}
function* updateEvent(action) {
  try {
    const { data } = yield call(EventsApi.updateEvent, action.payload.id,action.payload.data);

    yield put({ type: UPDATE_EVENT_SUCCESS,payload:normlizeEvent(data)});
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
function* createEventSaga() {
  yield takeLatest(CREATE_EVENT, createEvent);
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
  createEventSaga
};
