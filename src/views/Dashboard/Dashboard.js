import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEvents,
  futureEventsSelector,
  pastEventsSelector,
  allEventsSelector,
  allEventsIdSelector
} from "../../containers/EventsList/ducks";
import {EventsList} from "../../containers";
import { Col, EventFilters } from "../../components";
class Dashboard extends Component {
  get filter() {
    return this.state.filter;
  }
  set filter(filter) {
    this.setState({ filter });
  }
  constructor() {
    super();
    this.state = { filter: "all" };
  }
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props;
    const { state } = this;
    console.log(events);
    return (
      <div>
        <Col desktop={12}>
          <EventFilters
            onClick={() => (this.filter = "all")}
            className={state.filter === "all" ? "selected" : null}
          >
            ALL EVENTS
          </EventFilters>
          <EventFilters
            onClick={() => (this.filter = "future")}
            className={state.filter === "future" ? "selected" : null}
          >
            FUTURE EVENTS
          </EventFilters>
          <EventFilters
            onClick={() => (this.filter = "past")}
            className={state.filter === "past" ? "selected" : null}
          >
            PAST EVENTS
          </EventFilters>
        </Col>
        <EventsList
          {...this.props}
          events={events}
          ids={this.props[this.state.filter]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: allEventsSelector(state),
  all: allEventsIdSelector(state),
  future: futureEventsSelector(state),
  past: pastEventsSelector(state)
});
export default connect(mapStateToProps, {
  getEvents
})(Dashboard);
