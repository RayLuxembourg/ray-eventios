import { createSelector } from "reselect";

const selectEventById = state =>
  state
    .get("eventById")
    .get("event")
    .toObject();
const selectAttendeesById = state =>
  state
    .get("eventById")
    .get("attendees")
    .toObject();
export const attendeesSelector = createSelector(
  selectAttendeesById,
  attendees => attendees
);
export const eventByIdSelector = createSelector(
  selectEventById,
  event => event
);
