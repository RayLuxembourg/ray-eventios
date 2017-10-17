import { LOGIN,LOGIN_DONE } from "./types";

export  function login(user) {
    return { type: LOGIN, payload: user };
}
export  function loginComplete() {
    return { type: LOGIN_DONE };
}