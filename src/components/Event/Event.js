import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import format from "date-fns/format";
import { userIcon } from "../../assets";
import PropTypes from "prop-types";
import { Media } from "../../utils";
export const EventList = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  border-radius: 2px;
  margin-bottom: 20px;
  align-items: center;
  padding: 20px 32px;
  position: relative;
  text-align:left;
  ${Media.mobile`flex-direction:column;padding:16px;align-items: baseline;`} &:last-of-type {
    margin-bottom: 0;
  }
`;
EventList.Title = styled.h3`
  font-size: 18px;
  color: #323c46;
  font-weight:500;
  letter-spacing: 0;
  line-height: 48px;
  margin: 0;
  width: 25%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${Media.mobile`width:100%;line-height:24px;margin-top:10px`};
`;
EventList.Description = styled.p`
  font-size: 16px;
  color: #949ea8;
  letter-spacing: 0;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 25%;
  ${Media.mobile`width:100%`};
`;
EventList.Date = styled.small`
  font-size: 14px;
  color: #cacdd0;
  letter-spacing: 0;
  line-height: 24px;
  width: auto;
  ${Media.mobile`width: calc(100% - 100px);`};
`;
EventList.Organaizer = styled.small`
  font-size: 14px;
  color: #7d7878;
  letter-spacing: 0;
  line-height: 24px;
  width: auto;
  ${Media.mobile`width:100%;display:none`};
`;
EventList.Attendings = styled.small`
  width: auto;
  font-size: 14px;
  color: #949ea8;
  letter-spacing: 0;
  line-height: 24px;

  img {
    vertical-align: sub;
    margin-right: 7px;
  }
`;
EventList.Action = styled.div`
  width: auto;
  ${Media.mobile`position:absolute;right:16px;bottom:16px`};
`;
export const EventGrid = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  border-radius: 2px;
  padding: 32px;
  width: 100%;
  transform: scale(1);
  transition: transform 0.2s ease-out;
  cursor: pointer;
  position: relative;
  height: 280px;
  ${Media.mobile`padding:24px`}
  button {
    position: absolute;
    right: 32px;
    bottom: 32px;
    z-index: 1;
    ${Media.mobile`right:24px;bottom:24px`}
    
  }
  img {
    vertical-align: sub;
    margin-right: 7px;
  }
  .att {
  }
`;

EventGrid.Date = styled.small`
  font-size: 14px;
  color: #cacdd0;
  letter-spacing: 0;
  line-height: 24px;
`;
EventGrid.Title = styled.h3`
  font-size: 22px;
  color: #323c46;
  letter-spacing: 0;
  line-height: 24px;
  margin: 0;
  margin-top: 24px;
`;
EventGrid.Organaizer = styled.span`
  font-size: 14px;
  color: #7d7878;
  letter-spacing: 0;
  line-height: 24px;
`;
EventGrid.Description = styled.p`
  font-size: 16px;
  color: #949ea8;
  letter-spacing: 0;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
EventGrid.Attendings = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  font-size: 14px;
  color: #949ea8;
  letter-spacing: 0;
  img {
    vertical-align: sub;
    margin-right: 7px;
  }
`;
const Event = ({ event, attend, unattend, id, list }) => {
  const attending = () => {
    let type;
    if (id === event.owner.id) {
      type = "organizer";
    }
    if (event.attendees.indexOf(id) !== -1) {
      type = "attending";
    }
    if (type === "organizer") {
      return { text: "EDIT", color: "secondary", method: null };
    }
    if (type === "attending") {
      return { text: "LEAVE", color: "danger", method: unattend };
    }
    return { text: "JOIN", color: "primary", method: attend };
  };
  const type = attending();
  const handleButtonClick = e => {
    if (type.method) {
      e.preventDefault();
      e.stopPropagation();
      type.method(event.id);
    }
  };
  if (!list) {
    return (
      <EventGrid>
        <EventGrid.Date>
          {format(event.startsAt, "MMMM D, YYYY - h:m A")}
          {event.startAt}
        </EventGrid.Date>
        <EventGrid.Title>{event.title}</EventGrid.Title>
        <EventGrid.Organaizer>{`${event.owner.firstName} ${event.owner
          .lastName}`}</EventGrid.Organaizer>
        <EventGrid.Description>{event.description}</EventGrid.Description>
        <EventGrid.Attendings className={"att"}>
          <img src={userIcon} alt={"attendees"} />
          {`${event.attendees.length} of ${event.capacity}`}
        </EventGrid.Attendings>
        <Button
          color={type.color}
          onClick={handleButtonClick}
          size={"sm"}
          content={type.text}
        />
      </EventGrid>
    );
  } else {
    return (
      <EventList>
        <EventList.Title>{event.title}</EventList.Title>
        <EventList.Description>{event.description}</EventList.Description>
        <EventList.Organaizer>{`${event.owner.firstName} ${event.owner
          .lastName}`}</EventList.Organaizer>
        <EventList.Date>
          {format(event.startsAt, "MMMM D, YYYY - h:m A")}
          {event.startAt}
        </EventList.Date>
        <EventList.Attendings className={"att"}>
          {`${event.attendees.length} of ${event.capacity}`}
        </EventList.Attendings>
        <EventList.Action>
          <Button
            color={type.color}
            onClick={handleButtonClick}
            size={"sm"}
            content={type.text}
          />
        </EventList.Action>
      </EventList>
    );
  }
};

Event.proptypes = {
  event: PropTypes.shape({
    startAt: PropTypes.string,
    title: PropTypes.string,
    owner: PropTypes.object,
    attendees: PropTypes.array,
    capacity: PropTypes.number,
    description: PropTypes.string
  }).isRequired,
  attend: PropTypes.func.isRequired,
  unattend: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
Event.defaultProps = {
  event: {
    startAt: "",
    title: "",
    owner: {},
    attendees: [],
    capacity: 0,
    description: ""
  }
};
export default Event;
//date format MMMM , D YYYY - h:m
