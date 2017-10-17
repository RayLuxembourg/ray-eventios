import { REGISTER,REGISTER_DONE } from "./types";

export function register(user) {
    return { type: REGISTER, payload: user };
  }
  export function registerCompleted() {
    return { type: REGISTER_DONE};
  }