import React, { Component } from "react";
import { connect } from "react-redux";
import { ProfileInfo, Event, Col, GridOptions } from "../../components";
import {
  attendingEventsSelector,
  ownerEventsSelector,
  allEventsSelector
} from "./ducks";
import { EventsList } from "../../containers";
import { getEvents } from "../../containers/EventsList/ducks";
import styled from "styled-components";
import { Media } from "../../utils";
import { gridIcon, listIcon } from "../../assets";
const ProfileStyle = styled.div`
  padding: 10em 7.5px;
  ${Media.mobile`padding:1em 7.5px`};
`;
class Profile extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  constructor() {
    super();
    this.state = { layout: "grid" };
  }
  get layout() {
    return this.state.layout;
  }
  set layout(layout) {
    this.setState({ layout });
  }
  selectedLayout(layout) {
    return this.state.layout === layout ? "selected" : "";
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
      <ProfileStyle>
        <ProfileInfo>
          <ProfileInfo.Profile>
            {user.firstName[0]} {user.lastName[0]}
          </ProfileInfo.Profile>
          <ProfileInfo.Title>
            {user.firstName} {user.lastName}
          </ProfileInfo.Title>
          <ProfileInfo.Sub>{user.email}</ProfileInfo.Sub>
        </ProfileInfo>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h3>My Events</h3>
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
        </div>
        <EventsList
          {...this.props}
          events={events}
          ids={[...ownerEvents, ...attendingEvents]}
          layout={this.layout}
        />
      </ProfileStyle>
    );
  }
}
const mapStateToProps = state => ({
  attendingEvents: attendingEventsSelector(state),
  ownerEvents: ownerEventsSelector(state),
  events: allEventsSelector(state)
});
export default connect(mapStateToProps, { getEvents })(Profile);
