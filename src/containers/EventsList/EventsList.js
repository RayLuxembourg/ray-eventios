import React, { Component } from "react";
import { connect } from "react-redux";
import { attendEvent, unAttendEvent } from "./ducks";
import { Col, Event } from "../../components";
import { loadUser } from "../../utils";
class EventsList extends Component {
  mapEvents(ids, events) {
    const user = loadUser();
    if (user) {
      const userId = user.id;
      return ids.map(id => (
        <Col
          onClick={() => this.props.history.push("/event/" + id)}
          key={id}
          style={{ padding: "7.5px" }}
          desktop={4}
          mobile={12}
        >
          <Event
            attend={this.props.attendEvent}
            unattend={this.props.unAttendEvent}
            event={events[id]}
            id={userId}
          />
        </Col>
      ));
    }
    return null;
  }
  render() {
    const { events, ids } = this.props;
    return <div>{this.mapEvents(ids, events)}</div>;
  }
}

export default connect(null, { attendEvent, unAttendEvent })(EventsList);
