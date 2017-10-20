import React, { Component } from "react";
import { connect } from "react-redux";
import { ProfileInfo, Event, Col, GridOptions,Spinner } from "../../components";
import {
  attendingEventsSelector,
  ownerEventsSelector,
  allEventsSelector
} from "./ducks";
import { EventsList } from "../../containers";
import { getEvents, loadingSelector } from "../../containers/EventsList/ducks";
import styled from "styled-components";
import { Media } from "../../utils";
import { gridIcon, listIcon,mainSpinner } from "../../assets";
const ProfileStyle = styled.div`
  padding: 10em 0;
  ${Media.mobile`padding:1em 0`};
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
        <Col desktop={4} mobile={12} style={{ padding: "8px" }}>
          <Event {...this.props} event={events[id]} />
        </Col>
      );
    });
  }
  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    const { attendingEvents, ownerEvents, events, loading } = this.props;
    if (loading) {
      return <Spinner style={{ width: "60px" }} src={mainSpinner} />;
    }
    return (
      <ProfileStyle>
        <div style={{ padding: "0 8px" }}>
          <ProfileInfo>
            <ProfileInfo.Profile>
              {user.firstName[0]} {user.lastName[0]}
            </ProfileInfo.Profile>
            <ProfileInfo.Title>
              {user.firstName} {user.lastName}
            </ProfileInfo.Title>
            <ProfileInfo.Sub>{user.email}</ProfileInfo.Sub>
          </ProfileInfo>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 8px"
          }}
        >
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
  events: allEventsSelector(state),
  loading: loadingSelector(state)
});
export default connect(mapStateToProps, { getEvents })(Profile);
