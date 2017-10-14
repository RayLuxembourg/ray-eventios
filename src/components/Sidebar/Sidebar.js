import styled from "styled-components";
import { Media } from "../../utils";
import {sideBarBg} from "../../assets";
const Sidebar = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index:1;
  float: left;
  background-image: url(${sideBarBg});
  background-position: left;
  background-size:cover;
  background-repeat: no-repeat;
  .logo{
    position:absolute;
    top:30px;
    left:40px;
  }
  ${Media.mobile`
    display:none;
  `}
`;

export default Sidebar;
