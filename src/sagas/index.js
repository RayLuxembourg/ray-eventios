import { all, fork } from "redux-saga/effects";

import { loginOperations } from "../views/Login/ducks";
import { registerOperations } from "../views/Register/ducks";
import {
  attendEventSaga,
  unAttendEventSaga,
  getEventsSaga,
  postEventSaga
} from "../containers/EventsList/ducks";
import {
  getEventsByIdSaga,
  attendEventByIdSaga,
  unAttendEventByIdSaga,
  deleteEventsByIdSaga,
  updateEventsByIdSaga
} from "../views/Event/ducks";

export default function* rootSaga() {
  yield all([
    fork(registerOperations),
    fork(loginOperations),
    fork(getEventsSaga),
    fork(getEventsByIdSaga),
    fork(attendEventByIdSaga),
    fork(unAttendEventByIdSaga),
    fork(deleteEventsByIdSaga),
    fork(postEventSaga),
    fork(updateEventsByIdSaga),
    fork(attendEventSaga),
    fork(unAttendEventSaga)
  ]);
}
