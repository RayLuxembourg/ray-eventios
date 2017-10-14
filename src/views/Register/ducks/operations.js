import { call, put, takeLatest } from "redux-saga/effects";
import { UserApi } from "../../../api";
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
function* createUser(action) {
  try {
    const { data } = yield call(UserApi.newUser, action.payload);
    yield put({ type: REGISTER_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: REGISTER_FAIL, payload: e });
  }
}

export default function* createUserSaga() {
  yield takeLatest(REGISTER, createUser);
}
