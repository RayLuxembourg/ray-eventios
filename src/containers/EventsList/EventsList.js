import React, { Component } from "react";
import { connect } from "react-redux";
import { attendEvent, unAttendEvent } from "./ducks";
import { Col, Event } from "../../components";
import { loadUser } from "../../utils";
class EventsList extends Component {
  mapEvents(ids, events, layout) {
    const user = loadUser();
    if (user) {
      const userId = user.id;

      if (layout === "grid") {
        return ids.map(id => (
          <Col
            onClick={() => this.props.history.push("/event/" + id)}
            key={id}
            desktop={4}
            mobile={12}
            event={true}
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
      if (layout === "list") {
        return ids.map(id => (
          <Event
            onClick={() => this.props.history.push("/event/" + id)}
            key={id}
            attend={this.props.attendEvent}
            unattend={this.props.unAttendEvent}
            event={events[id]}
            id={userId}
            list={true}
          />
        ));
      }
    }
    return null;
  }
  render() {
    const { events, ids, layout } = this.props;
    return (
      <div style={{ padding: layout === "list" ? "0 8px" : "" }}>
        {this.mapEvents(ids, events, layout)}
      </div>
    );
  }
}

export default connect(null, { attendEvent, unAttendEvent })(EventsList);
