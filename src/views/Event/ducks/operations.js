import { call, put, takeLatest } from "redux-saga/effects";
import { normlizeEvent } from "./schema";
import { EventsApi } from "../../../api";
import {
  GET_EVENT_BY_ID,
  GET_EVENT_BY_ID_SUCCESS,
  GET_EVENT_BY_ID_FAIL,
  DELETE_EVENT,
  DELETE_EVENT_SUCCES,
  DELETE_EVENT_FAIL,
  ATTEND_EVENT,
  ATTEND_EVENT_SUCCESS,
  ATTEND_EVENT_FAIL,
  UNATTEND_EVENT,
  UNATTEND_EVENT_SUCCESS,
  UNATTEND_EVENT_FAIL
} from "./types";
function* getEventsById(action) {
  try {
    const { data } = yield call(EventsApi.getEventsById, action.payload);

    yield put({ type: GET_EVENT_BY_ID_SUCCESS, payload: normlizeEvent(data) });
  } catch (e) {
    yield put({ type: GET_EVENT_BY_ID_FAIL, payload: e });
  }
}
function* deleteEventsById(action) {
  try {
    const { data } = yield call(EventsApi.deleteEvent, action.payload);

    yield put({ type: DELETE_EVENT_SUCCES});
  } catch (e) {
    yield put({ type: DELETE_EVENT_FAIL, payload: e });
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

function* getEventsByIdSaga() {
  yield takeLatest(GET_EVENT_BY_ID, getEventsById);
}
function* deleteEventsByIdSaga() {
  yield takeLatest(DELETE_EVENT, deleteEventsById);
}
function* attendEventByIdSaga() {
  yield takeLatest(ATTEND_EVENT, attendEvent);
}
function* unAttendEventByIdSaga() {
  yield takeLatest(UNATTEND_EVENT, unAttendEvent);
}

export {
  getEventsByIdSaga,
  attendEventByIdSaga,
  unAttendEventByIdSaga,
  deleteEventsByIdSaga
};
