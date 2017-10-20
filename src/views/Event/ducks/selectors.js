import { createSelector } from "reselect";
import format from "date-fns/format";
const selectEventById = state =>
  state
    .get("eventById")
    .get("event")
    .toObject();
const selectLoading = state =>
  state
    .get("eventById")
    .get("loading")
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
export const loadingSelector = createSelector(
  selectLoading,
  loading => loading
);
export const eventByIdEditSelector = createSelector(selectEventById, event => ({
  title: event.title,
  description: event.description,
  capacity: event.capacity,
  date: format(event.startsAt, "YYYY-MM-DD"),
  time: format(event.startsAt, "hh:mm")
}));
