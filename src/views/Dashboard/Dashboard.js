import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEvents,
  futureEventsSelector,
  pastEventsSelector,
  allEventsSelector,
  allEventsIdSelector
} from "../../containers/EventsList/ducks";
import { EventsList } from "../../containers";
import { Col, EventFilters, GridOptions } from "../../components";
import { gridIcon, listIcon } from "../../assets";
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
  selectedFilter(filter) {
    return this.state.filter === filter ? "selected" : "";
  }
  render() {
    const { events } = this.props;
    console.log(events);
    return (
      <div style={{ minHeight: "654px" }}>
        <Col desktop={12} style={{ padding: "7.5px" }}>
          <EventFilters>
            <EventFilters.Item
              className={this.selectedFilter("all")}
              onClick={() => (this.filter = "all")}
            >
              ALL EVENTS
            </EventFilters.Item>
            <EventFilters.Item
              className={this.selectedFilter("future")}
              onClick={() => (this.filter = "future")}
            >
              FUTURE EVENTS
            </EventFilters.Item>
            <EventFilters.Item
              className={this.selectedFilter("past")}
              onClick={() => (this.filter = "past")}
            >
              PAST EVENTS
            </EventFilters.Item>
          </EventFilters>

          <GridOptions>
            <GridOptions.Item className={"selected"}>
              <img src={gridIcon} alt="" />
            </GridOptions.Item>
            <GridOptions.Item>
              <img src={listIcon} alt="" />
            </GridOptions.Item>
          </GridOptions>
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
