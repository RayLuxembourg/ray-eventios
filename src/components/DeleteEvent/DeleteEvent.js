import styled from "styled-components";
import {Media} from "../../utils"
const DeleteEvent = styled.div`
  float: right;
  color: #ff4081;
  cursor: pointer;
`;
DeleteEvent.Img = styled.img`
    margin-right:10px;
`;
DeleteEvent.Text = styled.span`
    font-family:Roboto;
    ${Media.mobile`display:none`}

`;
export default DeleteEvent;