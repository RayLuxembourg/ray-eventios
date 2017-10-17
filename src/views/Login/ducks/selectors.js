import { createSelector } from "reselect";
const selectLoading = state => state.get("auth").get("loading");
const selectSuccess = state => state.get("auth").get("success");
const selectError = state => state.get("auth").get("error");

export const loadingSelector = createSelector(selectLoading, loading => loading);
export const errorSelector = createSelector(selectError, error => error);
export const successSelector = createSelector(selectSuccess, success => success);
