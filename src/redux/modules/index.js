import { combineReducers } from "redux-immutable";
import events from "../../containers/EventsList/ducks"
import auth from "../../views/Login/ducks"
import register from "../../views/Register/ducks"
import eventById from "../../views/Event/ducks"
import { reducer as form } from 'redux-form/immutable';

export default combineReducers({
    form,
    events,
    auth,
    register,
    eventById
});
