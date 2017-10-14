import { call, put, takeLatest } from "redux-saga/effects";
import { UserApi, setAuthorizationToken } from "../../../api";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
function* login(action) {
  try {
    const data = yield call(UserApi.login, action.payload);
    setAuthorizationToken(data.headers["authorization"]);
    localStorage.setItem("user", JSON.stringify(data.data));
    localStorage.setItem("token", data.headers["authorization"]);
    console.log(data);
    yield put({ type: LOGIN_SUCCESS, payload: data.data });
  } catch (e) {
    yield put({ type: LOGIN_FAIL, payload: e });
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN, login);
}
