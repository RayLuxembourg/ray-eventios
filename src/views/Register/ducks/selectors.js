import { createSelector } from "reselect";
const selectLoading = state => state.get("register").get("loading");
const selectSuccess = state => state.get("register").get("success");
const selectError = state => state.get("register").get("error");

export const loadingSelector = createSelector(selectLoading, loading => loading);
export const errorSelector = createSelector(selectError, error => error);
export const successSelector = createSelector(selectSuccess, success => success);
