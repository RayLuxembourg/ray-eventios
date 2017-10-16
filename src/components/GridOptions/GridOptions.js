import styled from "styled-components";
const GridOptions = styled.div`float: right;`;
GridOptions.Item = styled.span`
  transition: opacity 0.2s ease-out;
  opacity: 0.3;
  cursor:pointer;
  &:first-of-type {
    margin-right: 8px;
  }
  &.selected {
    transition: opacity 0.2s ease-in;
    opacity: 1;
  }
`;
export default GridOptions;
