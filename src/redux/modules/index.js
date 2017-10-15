import { combineReducers } from "redux-immutable";
import events from "../../containers/EventsList/ducks"
import auth from "../../views/Login/ducks"
import register from "../../views/Register/ducks"
import eventById from "../../views/Event/ducks"

export default combineReducers({
    events,
    auth,
    register,
    eventById
});
