import styled from "styled-components";
import { Media } from "../../utils";
const MobileFilters = styled.ul`
  position: absolute;
  background: #ffffff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  left: 15px;
  padding: 16px 16px;
  list-style: none;
  min-width: 162px;
  display: none;
  z-index: 10;
  display: none;
  &:before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 14px 12px 14px;
    border-color: transparent transparent #ffffff transparent;
    z-index: 11;
    position: absolute;
    right: 20px;
    top: -10px;
  }
`;
MobileFilters.Item = styled.li`
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 24px;
  letter-spacing: 0;
  margin-bottom: 8px;
  a {
    all: unset;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
MobileFilters.Selected = styled.span`
  display: none;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 24px;
  position: relative;
  ${Media.mobile`display:inline`} &:before {
    content: "SHOW: ";
    color: #a9aeb4;
  }
  &:after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #4b535c transparent transparent transparent;
    position: absolute;
    top: 1px;
    right: -15px;
  }
`;
export default MobileFilters;
