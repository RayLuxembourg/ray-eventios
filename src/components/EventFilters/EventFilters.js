import styled from "styled-components";
import { Media } from "../../utils";
const EventFilters = styled.div`
  float:left;
`;
EventFilters.Item = styled.span`
  font-size: 12px;
  color: #a9aeb4;
  letter-spacing: 1px;
  line-height: 24px;
  margin-right: 28px;
  display: inline-block;
  cursor: pointer;
  ${Media.mobile`display:none`} &:last-of-type {
    margin-right: 0;
  }
  &.selected {
    color: #323c46;
  }
`;
export default EventFilters;
