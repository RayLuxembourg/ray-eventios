import styled from "styled-components";
import { Media } from "../../utils";
const gridColumns = 100 / 12;
const column = columns => {
  return `${gridColumns * columns}%`;
};
export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  max-width:calc(100% - 16px);
  margin-top:15em;
  margin-bottom:5em;
  ${Media.mobile`margin-top:1em;`}
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
  float:left;
  ${Media.mobile`
    width: ${({ mobile }) => column(mobile)};
  `};
`;
export default Col;