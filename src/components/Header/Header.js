import styled from "styled-components";
import {Media} from "../../utils";
const Header = styled.header`
    position:absolute;
    top:30px;
    width:100%;
    height:48px;
    padding:0 40px;
    z-index:10;
${Media.mobile`top:10px`}    
`
export default Header;
