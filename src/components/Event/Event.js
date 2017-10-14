import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import format from "date-fns/format";
import { userIcon } from "../../assets";
import { Media } from "../../utils";
export const EventStyle = styled.div`
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


  button {
    position: absolute;
    right: 32px;
    bottom: 32px;
  }
  img {
    vertical-align: sub;
    margin-right: 7px;
  }
  .att {
  }
`;

EventStyle.Date = styled.small`
  font-size: 14px;
  color: #cacdd0;
  letter-spacing: 0;
  line-height: 24px;
`;
EventStyle.Title = styled.h3`
  font-size: 22px;
  color: #323c46;
  letter-spacing: 0;
  line-height: 48px;
  margin: 0;
`;
EventStyle.Organaizer = styled.span`
  font-size: 14px;
  color: #7d7878;
  letter-spacing: 0;
  line-height: 24px;
`;
EventStyle.Description = styled.p`
  font-size: 16px;
  color: #949ea8;
  letter-spacing: 0;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
EventStyle.Attendings = styled.div`
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
const Event = ({ event, attend, unattend }) => {
  const attending = () => {
    const id = JSON.parse(localStorage.getItem("user")).id;
    let type;
    if (id === event.owner.id) {
      type = "organizer";
    }
    if (event.attendees.indexOf(id) !== -1) {
      type = "attending";
    }
    if (type === "organizer") {
      return { text: "EDIT", color: "secondary",method: null };
    }
    if (type === "attending") {
      return { text: "LEAVE", color: "danger", method: unattend };
    }
    return { text: "JOIN", color: "primary", method: attend  };
  };
  const descriptionSubstring = desc => {
    if (desc.length > 60) {
      return desc.substring(0, 100 - 3) + "...";
    }
    return desc;
  };
  const type = attending();
  const handleButtonClick = (e) =>{
    if(type.method){
      e.preventDefault(); 
      e.stopPropagation();  
      type.method(event.id);
    }
  }
  return (
    <EventStyle >
      <EventStyle.Date>
        {format(event.startsAt, "MMMM , D YYYY - h:mA")}
        {event.startAt}
      </EventStyle.Date>
      <EventStyle.Title>{event.title}</EventStyle.Title>
      <EventStyle.Organaizer>{`${event.owner.firstName} ${event.owner
        .lastName}`}</EventStyle.Organaizer>
      <EventStyle.Description>
        {descriptionSubstring(event.description)}
      </EventStyle.Description>
      <EventStyle.Attendings className={"att"}>
        <img src={userIcon} alt={"attendees"} />
        {`${event.attendees.length} of ${event.capacity}`}
      </EventStyle.Attendings>
      <Button
        type={type.color}
        onClick={handleButtonClick}
        size={"sm"}
        content={type.text}
      />
    </EventStyle>
  );
};

export default Event;
//date format MMMM , D YYYY - h:m
