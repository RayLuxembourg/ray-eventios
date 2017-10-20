import styled from "styled-components";
import { Media } from "../../utils";
const gridColumns = 100 / 12;
const column = columns => {
  return `${gridColumns * columns}%`;
};
export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  ${Media.mobile`padding-bottom: 8em;`};
`;
export const Row = styled.div`
  width: 100%;
  &:after {
    content: "";
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }
`;
export const Col = styled.div`
  width: ${({ desktop }) => column(desktop)};
  float: left;
  padding:${({ event }) => "8px"};
  ${Media.mobile`
    width: ${({ mobile }) => column(mobile)};
  `};
`;
export default Col;
