import styled from "styled-components";
const Attendees = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  border-radius: 2px;
  padding:32px;
  margin-bottom: 15px;
  &:after{
    content:"";
    clear:both;
    display: table;
  }
`;
Attendees.Title = styled.h3`
  font-size: 22px;
  color: #323c46;
  letter-spacing: 0;
  line-height: 32px;
  margin:0;
  margin-bottom:20px;
`;
Attendees.Item = styled.span`
  background: #d9dce1;
  border-radius: 100px;
  font-family: Roboto-Regular;
  font-size: 13px;
  color: #949ea8;
  letter-spacing: 0;
  //   line-height: 31px;
  display: block;
  float: left;
  padding: 14px;
  margin-right: 8px;
  margin-bottom: 15px;
  &:last-of-type {
    margin-right: 0;
  }
  &.user-attendee{
    background:#fff;
    border:2px solid #949ea8;
    padding:12px;
  }
`;

export default Attendees;
