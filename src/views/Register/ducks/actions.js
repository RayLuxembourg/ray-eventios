import { REGISTER } from "./types";

export function register(user) {
    return { type: REGISTER, payload: user };
  }
  