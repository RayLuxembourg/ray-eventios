import styled from "styled-components";
const EventFilters = styled.span`
font-size: 12px;
color: #a9aeb4;
letter-spacing: 1px;
line-height: 24px;
margin-right: 28px;
margin-bottom: 40px;
display: inline-block;
cursor: pointer;
&:last-of-type {
  margin-right: 0;
}
&.selected {
  color: #323c46;
}
`;
export default EventFilters;