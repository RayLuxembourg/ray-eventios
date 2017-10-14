import { LOGIN } from "./types";

export default function login(user) {
    return { type: LOGIN, payload: user };
}