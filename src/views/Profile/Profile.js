import React, { Component } from "react";
import { connect } from "react-redux";
import { ProfileInfo, Event, Col } from "../../components";
import {
  attendingEventsSelector,
  ownerEventsSelector,
  allEventsSelector
} from "./ducks";
import {EventsList} from "../../containers";
import {getEvents} from "../../containers/EventsList/ducks";
class Profile extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  mapMyEvents(ids, events) {
    return ids.map(id => {
      return (
        <Col desktop={4} mobile={12} style={{ padding: "7.5px" }}>
          <Event {...this.props} event={events[id]} />
        </Col>
      );
    });
  }
  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    const { attendingEvents, ownerEvents, events } = this.props;
    return (
      <div style={{padding:"7.5px"}}>
        <ProfileInfo>
          <ProfileInfo.Profile>
            {user.firstName[0]} {user.lastName[0]}
          </ProfileInfo.Profile>
          <ProfileInfo.Title>
            {user.firstName} {user.lastName}
          </ProfileInfo.Title>
          <ProfileInfo.Sub>{user.email}</ProfileInfo.Sub>
        </ProfileInfo>
        <h3>My Events</h3>
        <EventsList
          {...this.props}
          events={events}
          ids={[...ownerEvents, ...attendingEvents]}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  attendingEvents: attendingEventsSelector(state),
  ownerEvents: ownerEventsSelector(state),
  events: allEventsSelector(state)
});
export default connect(mapStateToProps,{getEvents})(Profile);
