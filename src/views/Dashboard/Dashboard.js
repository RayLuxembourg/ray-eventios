import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEvents,
  futureEventsSelector,
  pastEventsSelector,
  allEventsSelector,
  allEventsIdSelector,
  loadingSelector
} from "../../containers/EventsList/ducks";
import { EventsList } from "../../containers";
import { Col, EventFilters, GridOptions, ActionButton,Spinner } from "../../components";
import { gridIcon, listIcon,addIcon,mainSpinner } from "../../assets";
class Dashboard extends Component {
  get filter() {
    return this.state.filter;
  }
  set filter(filter) {
    this.setState({ filter });
  }
  get layout() {
    return this.state.layout;
  }
  set layout(layout) {
    this.setState({ layout });
  }
  constructor() {
    super();
    this.state = { filter: "all", layout: "grid" };
  }
  componentDidMount() {
    this.props.getEvents();
  }
  selectedFilter(filter) {
    return this.state.filter === filter ? "selected" : "";
  }
  selectedLayout(layout) {
    return this.state.layout === layout ? "selected" : "";
  }
  render() {
    const { events,loading } = this.props;
    console.log(events);
    if(loading){
      return <Spinner style={{width:"60px"}} src={mainSpinner} />
    }
    return (
      <div style={{ minHeight: "654px" }}>
        <Col desktop={12} style={{ padding: "8px", margin: "40px 0 40px 0" }}>
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
            <GridOptions.Item
              onClick={() => (this.layout = "grid")}
              className={this.selectedLayout("grid")}
            >
              <img src={gridIcon} alt="" />
            </GridOptions.Item>
            <GridOptions.Item
              onClick={() => (this.layout = "list")}
              className={this.selectedLayout("list")}
            >
              <img src={listIcon} alt="" />
            </GridOptions.Item>
          </GridOptions>
        </Col>
        <EventsList
          {...this.props}
          events={events}
          ids={this.props[this.state.filter]}
          layout={this.layout}
        />
        <ActionButton onClick={() => this.props.history.push("/new")}>
          <ActionButton.content src={addIcon} />
        </ActionButton>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: allEventsSelector(state),
  all: allEventsIdSelector(state),
  future: futureEventsSelector(state),
  past: pastEventsSelector(state),
  loading:loadingSelector(state)
});
export default connect(mapStateToProps, {
  getEvents
})(Dashboard);
